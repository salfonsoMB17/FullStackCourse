import { useState, useEffect  } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'
import countriesServices  from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterValue, setFilterValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

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
    setSelectedCountry(null)
  }

  const showCountry = (country) => {
    setSelectedCountry(country)
  }

  const countriesfiltered = countries.filter(
    country => country.name.common.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={countriesfiltered}
      selectedCountry={selectedCountry}
      onShow={showCountry} />
    </div>
  )
}

export default App
