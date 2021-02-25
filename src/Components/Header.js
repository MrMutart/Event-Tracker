import { Icon } from '@iconify/react'
import satelliteIcon from '@iconify-icons/fa-solid/satellite'
import dishIcon from '@iconify-icons/fa-solid/satellite-dish'
import nasaIcon from '@iconify-icons/simple-icons/nasa'

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Icon icon={ dishIcon } className="dish-icon" />
                Natural Event Tracker &lt; Powered by <Icon icon={ nasaIcon } className="head-nasa-icon"/> /&gt;
                <Icon icon={ satelliteIcon } className="satellite-icon" />
            
            </h1>

        </header>
    )
}

export default Header