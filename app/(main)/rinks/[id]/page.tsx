import { Flex } from "antd"
import { Suspense } from "react"

import IceRinkFullInfo from "@/app/ui/rinks/ice-rink-full-info"
import { IceRinkFullInfoSkeleton } from "@/app/ui/rinks/ice-rink-full-info-skeleton"
import Map from "@/app/ui/rinks/map"
import { MapSkeleton } from "@/app/ui/rinks/map-skeleton"
import { RinkSchedule } from "@/app/ui/rinks/rink-schedule"
import { RinkScheduleSkeleton } from "@/app/ui/rinks/rink-schedule-skeleton"
import { getIceRinkInfoById } from "@/lib/data/ice-rinks"

export default async function Page(props: {
  params: Promise<{ id: string }>,
  searchParams: Record<string, string | string[]>
}) {
  const params = await props.params
  const searchParams = await props.searchParams

  const rink = await getIceRinkInfoById(params.id).catch(e => console.log(e))

  return (
    <Flex vertical gap={32}>
      <Suspense fallback={<IceRinkFullInfoSkeleton />}>
        <IceRinkFullInfo id={params.id} />
      </Suspense>

      <Flex gap={16} wrap="wrap">
        <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
          <Suspense fallback={<RinkScheduleSkeleton />}>
            <RinkSchedule id={params.id} searchParams={searchParams} />
          </Suspense>
        </div>

        <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
          <Suspense fallback={<MapSkeleton />}>
            <Map location={[+rink.longitude, +rink.latitude]} />
          </Suspense>
        </div>
      </Flex>
    </Flex>
  )
}
