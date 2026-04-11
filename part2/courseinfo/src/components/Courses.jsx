const Total = ({ parts } ) => {
  return (
    <div>
      <b>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
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
  //console.log(props.courses);
  return (
    <div>
      {props.courses.map(course => 
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course