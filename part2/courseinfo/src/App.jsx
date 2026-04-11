const Total = ({ parts }) => {
  let total = 0
  for (let i = 0; i < parts.length; i++) {
    total += parts[i].exercises
  }
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({ parts }) => {
  //console.log(parts);
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}
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

const Course = (props) => {
  //console.log(props);
  //console.log(props.course.name);
  //console.log(props.course.parts);
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },  
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
      
    ]
  }

  return <Course course={course} />
}

export default App
