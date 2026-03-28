const Total = ({ parts } ) => {
  //console.log(parts)
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const Header = course => {
  //console.log(course)
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (parts) => {
  //console.log(parts)
  return (
    <div>
      <p>{parts.name} {parts.exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]

  return(
    <div>
      <Header name={course} />
      <Content name={parts[0].name} exercises={parts[0].exercises} />
      <Content name={parts[1].name} exercises={parts[1].exercises} />
      <Content name={parts[2].name} exercises={parts[1].exercises} />
      <Total parts={parts} />
    </div>

  )    

}

export default App
