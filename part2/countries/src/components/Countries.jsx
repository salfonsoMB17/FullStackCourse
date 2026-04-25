import Country from './Country'
import CountryBasic from './CountryBasic'

const Countries = ({ filteredCountries }) => {
    if (filteredCountries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if (filteredCountries.length === 1) {
        return (
            <div>
                {filteredCountries.map(country => 
                    <Country key={country.cca3} country={country} />
                )}
            </div>
        )
    } else if (filteredCountries.length > 1) {
        return (
            <div>
                {filteredCountries.map(country => 
                    <CountryBasic key={country.cca3} country={country} />
                )}
            </div>
        )
    }
    
    return null  //Retorno NULL cuando no hay países
}

export default Countries