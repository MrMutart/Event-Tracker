import { Icon } from '@iconify/react'
import satelliteIcon from '@iconify-icons/twemoji/satellite'
import dishIcon from '@iconify-icons/twemoji/satellite-antenna'
import nasaIcon from '@iconify-icons/simple-icons/nasa'

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Icon icon={ dishIcon } flip="horizontal" className="dish-icon" />
                Natural Event Tracker &lt; Powered by <Icon icon={ nasaIcon } className="head-nasa-icon"/> /&gt;
                <Icon icon={ satelliteIcon } className="satellite-icon" />
            
            </h1>

        </header>
    )
}

export default Header