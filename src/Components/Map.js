import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import FireMarker from './FireMarker'
import SnowMarker from './SnowMarker'
import HeatMarker from './HeatMarker'
import StormMarker from './StormMarker'
import FloodMarker from './FloodMarker'
import IceMarker from './IceMarker'
import VolcanoMarker from './VolcanoMarker'
import DroughtMarker from './DroughtMarker'
import DustMarker from './DustMarker'
import EarthquakeMarker from './EarthquakeMarker'
import LandslideMarker from './LandslideMarker'
import ManmadeMarker from './ManmadeMarker'
import WaterMarker from './WaterMarker'
    
const Map = ({ eventData, center, zoom }) => {

    const [ locationInfo, setLocationInfo ] = useState(null)
    const toggleLocationInfoDisplay = () => {
        setLocationInfo(null)
    }
    const TOK = process.env.REACT_APP_TOK

    const markers = eventData.map(ev => {
        switch (ev.categories[0].id) {
            case 6:
                return <DroughtMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 7:
                return <DustMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 8:
                return <FireMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 9:
                return <FloodMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 10:
                const stormPath = [];
                for (let i = 0; i < ev.geometries.length; i++) {
                    stormPath.push(
                        <StormMarker lat={ev.geometries[i].coordinates[1]} 
                            lng={ev.geometries[i].coordinates[0]} 
                            onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                             dateTime: ev.geometries[i].date, lati: ev.geometries[i].coordinates[1],
                             longi: ev.geometries[i].coordinates[0] })} /> 
                    )
                }
                return stormPath;

            case 12:
                if (ev.geometries[0].type !== "Polygon") {
                    return <VolcanoMarker lat={ev.geometries[0].coordinates[1]} 
                        lng={ev.geometries[0].coordinates[0]} 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                        dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                        longi: ev.geometries[0].coordinates[0] })} />
                }
                else {
                    // dealing with a polygon type data -- need to investigate how to parse and represent
                    return null;
                }

            case 13:
                return <WaterMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 14:
                return <LandslideMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 15:
                return <IceMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />
            case 16:
                return <EarthquakeMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 17:
                return <SnowMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            case 18:
                return <HeatMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />
            case 19:
                return <ManmadeMarker lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title,
                     dateTime: ev.geometries[0].date, lati: ev.geometries[0].coordinates[1],
                     longi: ev.geometries[0].coordinates[0] })} />

            default:
                return null
            
        }
    })

    // return the GoogleMapReact component with default properties defined below
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: TOK }}
                center={ center }
                zoom={ zoom }
                onClick={ toggleLocationInfoDisplay }
            >

                { markers }

            </GoogleMapReact>

            {/*verify there is locationInfo for the event, and show info box */}
            { locationInfo && <LocationInfoBox info={ locationInfo } /> }

        </div>
    );

}

Map.defaultProps = {
    center: {
        lat: 38.5,
        lng: -95.5  // these values center on NA to start
    },
    zoom: 4
}

export default Map