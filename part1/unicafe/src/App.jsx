import { useState } from 'react'

const Total = ({ name, total }) => {
  return (
    <div>
      <p>{name} {total}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = props => {
  //console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header name="statistics" />
      <Total name="good" total={good} />
      <Total name="neutral" total={neutral} />
      <Total name="bad" total={bad} />
    </div>
  )
}

export default App
