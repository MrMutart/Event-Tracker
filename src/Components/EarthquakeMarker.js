import { Icon } from '@iconify/react'
import quakeIcon from '@iconify-icons/ri/earthquake-fill'

const QuakeMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={quakeIcon} className="quake-icon" />
        </div>
    )
}

export default QuakeMarker