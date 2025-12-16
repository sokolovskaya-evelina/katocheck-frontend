import Map from "@/app/ui/rinks/map"
import IceRinkFullInfo from "@/app/ui/rinks/ice-rink-full-info"
import {Card, Flex} from "antd"
import {getIceRinkById} from "@/lib/data/ice-rinks";
import {RinkSchedule} from "@/app/ui/rinks/rink-schedule";
import dayjs from "@/app/lib/dayjs";

export default async function Page(props: { params: Promise<{ id: string }>, searchParams: Record<string, string | string[]> }) {
    const params = await props.params;
    const searchParams = await props.searchParams

    const parsed = {
        day: typeof searchParams.day === "string" ? searchParams.day : undefined,
        arenaId: typeof searchParams.arenaId === "string" ? searchParams.arenaId : undefined,
        sessionType: typeof searchParams.sessionType === "string" ? searchParams.sessionType : undefined,
    }

    const rink = await getIceRinkById(params.id, parsed)

    const arenasOptions = Object.values(rink.arenas).map(option => ({value: option.id, label: option.name}))
    const sessionTypesOptions = Object.values(rink.sessionTypes).map(option => ({value: option.id, label: option.name}))

    const schedule = rink.schedules.reduce((acc, item) => {
        const dateKey = dayjs(item.date).format("YYYY-MM-DD")
        if (!acc[dateKey]) acc[dateKey] = []
        acc[dateKey].push(item)
        return acc
    }, {} as Record<string, typeof rink.schedules>)

    return (
        <Flex vertical gap={32}>
            <IceRinkFullInfo rink={rink}/>

            <Flex gap={16} wrap="wrap">
                <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
                    <RinkSchedule schedule={schedule} sessionTypeOptions={sessionTypesOptions} arenaOptions={arenasOptions} searchParams={params} selectedDay={parsed.day}/>
                </div>

                <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
                    <Card>
                        <Map location={[+rink.longitude, +rink.latitude]}/>
                    </Card>
                </div>
            </Flex>
        </Flex>
    )
}
