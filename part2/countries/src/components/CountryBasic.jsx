const CountryBasic = ({ country, onShow }) => (
  <div>
    <p>{country.name.common}
      <button 
          onClick={() => onShow(country)}
          style={{ marginLeft: '10px' }}
        >Show</button>
    </p>
  </div>
)

export default CountryBasic