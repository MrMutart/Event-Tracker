import { Icon } from '@iconify/react'
import slideIcon from '@iconify-icons/ant-design/fall-outlined'

const LandslideMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={slideIcon} className="slide-icon" />
        </div>
    )
}

export default LandslideMarker