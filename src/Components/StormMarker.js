import { Icon } from '@iconify/react'
import stormIcon from '@iconify/icons-mdi/weather-hurricane'

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={stormIcon} className="storm-icon" />
        </div>
    )
}

export default StormMarker