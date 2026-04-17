import Person from './Person'

const Persons = ({ filteredPersons, onDelete }) => {
  //console.log(filteredPersons)
  return (
    <ul>
      {filteredPersons.map(person => (
        <Person key={person.id} person={person} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default Persons