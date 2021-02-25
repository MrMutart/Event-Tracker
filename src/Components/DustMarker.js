import { Icon } from '@iconify/react'
import dustIcon from '@iconify-icons/carbon/windy-dust'

const DustMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={dustIcon} className="dust-icon" />
        </div>
    )
}

export default DustMarker