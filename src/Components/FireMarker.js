import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'

const FireMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="fire-icon" />
        </div>
    )
}

export default FireMarker