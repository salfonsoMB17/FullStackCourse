const Filter = ( props ) => (
    <div>Find countries: 
        <input
            onChange={props.handleFilterChange}
        />        
    </div>
)

export default Filter