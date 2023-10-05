'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export default function GoogleMap() {
  const position = { lat: -23.6, lng: -46.65 }

  return (
    <div className="mb-2 flex h-[536px] w-full flex-col items-center p-2">
      <h2 className="pb-9 text-xl font-medium text-indigo-950">Localização</h2>

      <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
        <Map
          className="h-full w-full rounded-xl shadow-xl"
          center={position}
          zoom={12}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}
