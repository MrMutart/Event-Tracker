import { useState, useEffect } from 'react'
import Map from './Components/Map'
import Loader from './Components/Loader'
import Header from './Components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await response.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

  }, []);

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={ eventData } /> :  <Loader /> }
    </div>
  );
}

export default App;
