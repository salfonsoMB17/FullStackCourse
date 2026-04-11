const Filter = ( props ) => (
    <div>filter shown with: 
        <input
            onChange={props.handleFilterChange}
        />        
    </div>
)

export default Filter