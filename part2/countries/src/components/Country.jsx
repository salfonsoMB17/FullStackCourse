const Country = ({ country }) => {
    //console.log(country.languages)
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
        </div>
    )
}

export default Country