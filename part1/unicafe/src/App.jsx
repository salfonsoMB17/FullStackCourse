import { useState } from 'react'

const Statistics = ({ goods, neutrals, bads }) => {
  const total = goods + neutrals + bads
  
  if (total === 0) {
    return <p>No feedback given</p>
  }
  
  const average = ((goods * 1) + (neutrals * 0) + (bads * -1)) / total
  const positive = (goods / total) * 100
  
  return (
    <div>
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )
}

const Totals = ({ name, total }) => {
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
      <Totals  name="good" total={good} />
      <Totals  name="neutral" total={neutral} />
      <Totals  name="bad" total={bad} />
      <Statistics goods={good} neutrals={neutral} bads={bad}/>
    </div>
  )
}

export default App
