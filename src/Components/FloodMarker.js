import { Icon } from '@iconify/react'
import floodIcon from '@iconify-icons/wi/flood'

const FloodMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={floodIcon} className="flood-icon" />
        </div>
    )
}

export default FloodMarker