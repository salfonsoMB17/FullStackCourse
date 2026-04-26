import Country from './Country'
import CountryBasic from './CountryBasic'

const Countries = ({ filteredCountries, onShow, selectedCountry }) => {
    if (selectedCountry) {
        //console.log(selectedCountry)
        return <Country country={selectedCountry} />
    }

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
                    <CountryBasic key={country.cca3} country={country} onShow={onShow} />
                )}
            </div>
        )
    }
    
    return null  //Retorno NULL cuando no hay países
}

export default Countries