import { Icon } from '@iconify/react'
import manIcon from '@iconify-icons/carbon/location-person-filled'

const ManmadeMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={manIcon} className="man-icon" />
        </div>
    )
}

export default ManmadeMarker