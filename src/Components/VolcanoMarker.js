import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify-icons/wi/volcano'

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={volcanoIcon} className="volcano-icon" />
        </div>
    )
}

export default VolcanoMarker