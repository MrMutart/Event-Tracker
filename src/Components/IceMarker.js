import { Icon } from '@iconify/react'
import iceIcon from '@iconify-icons/jam/mountain-f'

const IceMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={iceIcon} className="ice-icon" />
        </div>
    )
}

export default IceMarker