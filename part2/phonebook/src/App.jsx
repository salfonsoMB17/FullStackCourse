import { useState, useEffect  } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService  from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    //console.log('effect')
    personService 
      .getAll()
      .then(response => {
        //console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
  //console.log('render', persons.length, 'persons')

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    // POST al servidor
    personService 
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))  // response.data incluye el id generado
        setNewName('')
        setNewNumber('')
    })
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

  const onDeletePerson = (id) => {
    //console.log("delete clicked with id: ", id)
    const person = persons.find(p => p.id === id)
    
    if (window.confirm(`Delete ${person.name}?`)) {  // ← AQUÍ
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        newName={newName} 
        newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} onDelete={onDeletePerson} />
    </div>
  )
}

export default App
