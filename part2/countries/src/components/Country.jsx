import { useState, useEffect  } from 'react'
import weatherService from '../services/weather'

const Country = ({ country }) => {
    //console.log(country.languages)    
    const [weather, setWeather] = useState(null)
    const [weatherError, setWeatherError] = useState(null)

    useEffect(() => {
        if (country.capital && country.capital[0]) {
            const capital = country.capital[0]

            //console.log('Tiempo de:', capital)
            
            weatherService
                .getWeatherByCity(capital)
                .then(data => {
                    //console.log('Weather success:', data)
                    setWeather(data)
                    setWeatherError(null)
                })
                .catch(error => {
                    /*console.error('Full error:', error)
                    console.error('Error response:', error.response)
                    console.error('Error data:', error.response?.data)
                    console.error('Error status:', error.response?.status)
                    console.error('Weather error:', error.response?.data || error.message)*/
                    setWeatherError('Weather data unavailable')
                    setWeather(null)
                })
        }
    }, [country])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {country.languages && Object.values(country.languages).map(language => 
                    <li key={language}>{language}</li>
                )}
            </ul>          
            <img src={country.flags.png} alt={country.name.common} />
            {weather && (
                <div>
                    <h3>Weather in {country.capital[0]}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                    />
                </div>
            )}
            
            {weatherError && <p>{weatherError}</p>}
        </div>
    )
}

export default Country