const LocationInfoBox = ({ info }) => {
        return (
            <div className="location-info">
                <ul>
                    <h2>ID:        <strong>{ info.id }</strong></h2>
                    <li>TITLE:     <strong>{ info.title }</strong></li>
                    <li>DATE/TIME: <strong>{ info.dateTime }</strong></li>
                    <li>LATITUDE:  <strong>{ info.lati }</strong></li>
                    <li>LONGITUDE: <strong>{ info.longi }</strong></li>   
                    <p>(click anywhere on the map to hide)</p>        
                </ul>

            </div>
        )
}

export default LocationInfoBox
