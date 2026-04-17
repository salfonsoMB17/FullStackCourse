const Person = ({ person, onDelete }) => {
  return <li>
    {person.name} {person.number}
    <button 
        onClick={() => onDelete(person.id)}
        style={{ marginLeft: '10px' }}
      >delete</button>
  </li>
}

export default Person
