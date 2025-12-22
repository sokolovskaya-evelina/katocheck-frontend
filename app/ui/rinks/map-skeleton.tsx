"use client"

import {Card, Skeleton} from "antd"
import {MapPin} from "lucide-react"

export function MapSkeleton() {
    return (
        <Card>
            <Skeleton.Node active className="!w-full">
                <MapPin className="w-8 h-8 text-slate-400 animate-pulse"/>
            </Skeleton.Node>
        </Card>
    )
}
