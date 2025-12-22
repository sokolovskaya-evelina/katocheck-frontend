"use client"
import {Map as MapComponent, Placemark, YMaps} from "@pbe/react-yandex-maps"
import {Card} from "antd"

export default function Map({location}: { location: [number, number] }) {
    return (
        <Card>
            <YMaps>
                <MapComponent height={530} defaultState={{center: location, zoom: 18}}>
                    <Placemark defaultGeometry={location}/>
                </MapComponent>
            </YMaps>
        </Card>
    )
}
