

import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api'


const containerStyle: React.CSSProperties  = {
  width: '649px',
  height: '299px',
  borderRadius: '16px',
}

const center: {lat:number;lng:number} = {
  lat: 49.8415229,
  lng: 24.0303204,
}

export default function MyMap():React.ReactElement {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    language: 'uk',
    googleMapsApiKey: 'AIzaSyAovDzoE3laJuKWXS-Fc_geQmv-kVS8GVY',
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      <Marker position={center}/>,
    </GoogleMap>
  ) : (
    <></>
  )
}
