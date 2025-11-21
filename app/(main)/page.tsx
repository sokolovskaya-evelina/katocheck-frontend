import ScheduleFilters from "@/app/ui/schedule/schedule-filters"
import {Flex} from "antd"
import {Schedule} from "@/app/ui/schedule/schedule";
import {getAllIceRinks} from "@/lib/data/ice-rinks";
import {getAllSessionTypes} from "@/lib/data/schedule";

type Props = { searchParams: Record<string, string | string[]> }

export default async function Page({searchParams}: Props) {
    const params = await searchParams
    const rinks = await getAllIceRinks()
    const sessionTypes = await getAllSessionTypes()

    return (
    <Flex vertical gap={15}>
      <ScheduleFilters rinks={rinks} sessionTypes={sessionTypes} />
      <Schedule searchParams={params} />
    </Flex>
  )
}
