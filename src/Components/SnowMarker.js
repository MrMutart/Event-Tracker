import { Icon } from '@iconify/react'
import snowIcon from '@iconify-icons/map/snow'

const SnowMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={snowIcon} className="snow-icon" />
        </div>
    )
}

export default SnowMarker