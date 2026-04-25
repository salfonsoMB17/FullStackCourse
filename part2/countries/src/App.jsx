import { useState, useEffect  } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countriesServices  from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
      countriesServices 
        .getAll()
        .then(response => {
          //console.log(response)
          setCountries(response)
        })
    }, [])
  
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  const countriesfiltered = countries.filter(
    country => country.name.common.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={countriesfiltered} />
    </div>
  )
}

export default App
