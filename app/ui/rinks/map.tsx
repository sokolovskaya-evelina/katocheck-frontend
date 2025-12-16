"use client"
import {Map as MapComponent, Placemark, YMaps} from "@pbe/react-yandex-maps"

export default function Map({ location }: { location: [number, number] }) {
  return (
    <YMaps>
      <MapComponent height={530} defaultState={{ center: location, zoom: 18 }}>
          <Placemark defaultGeometry={location} />
      </MapComponent>
    </YMaps>
  )
}
