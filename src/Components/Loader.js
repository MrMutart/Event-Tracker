import spinner from './spinner.gif'
import { Icon } from '@iconify/react'
import nasaIcon from '@iconify-icons/simple-icons/nasa'

const Loader = () => {
    return (
        <div className="loader">
            <h1>Fetching Data from...</h1>
            <img src={ spinner } alt="Loading" />
            <Icon icon={ nasaIcon } className="load-nasa-icon" />
        </div>
    )
}

export default Loader