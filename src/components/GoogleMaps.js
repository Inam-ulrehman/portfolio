import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC59s6kwolJJzSY_IVEdhByj5K7Np8ltUg',
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 43.4450848, lng: -80.48596 }), [])

  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  )
}
