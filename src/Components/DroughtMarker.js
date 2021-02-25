import { Icon } from '@iconify/react'
import droughtIcon from '@iconify-icons/carbon/drought'

const DroughtMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={droughtIcon} className="drought-icon" />
        </div>
    )
}

export default DroughtMarker