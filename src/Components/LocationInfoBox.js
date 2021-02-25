const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <ul>
                <span id="close" onClick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;">X</span>
                <h2>ID: { info.id }</h2>
                <li>TITLE:     <strong>{ info.title }</strong></li>
                <li>DATE/TIME  <strong>{ info.dateTime }</strong></li>
                <li>LATITUDE:  <strong>{ info.lati }</strong></li>
                <li>LONGITUDE: <strong>{ info.longi }</strong></li>                
            </ul>

        </div>
    )
}

export default LocationInfoBox
