import { Icon } from '@iconify/react'
import waterIcon from '@iconify/icons-mdi/water-alert'

const WaterMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={waterIcon} className="water-icon" />
        </div>
    )
}

export default WaterMarker