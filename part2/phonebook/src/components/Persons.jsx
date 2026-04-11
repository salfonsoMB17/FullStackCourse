import Person from './Person'

const Persons = (persons) => {
  //console.log(persons.filteredPersons)
  return (
    <ul>
      {persons.filteredPersons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  )
}

export default Persons