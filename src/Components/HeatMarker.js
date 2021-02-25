import { Icon } from '@iconify/react'
import heatIcon from '@iconify-icons/carbon/temperature-hot'


const HeatMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={heatIcon} className="heat-icon" />
        </div>
    )
}

export default HeatMarker