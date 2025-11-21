import {Row, Col, Flex} from "antd"
import RinksFilters from "@/app/ui/rinks/rinks-filters";
import IceRinkShortInfo from "@/app/ui/rinks/ice-rink-short-info";
import {getIceRinksShortInfo} from "@/lib/data/ice-rinks";
import {getAllSessionTypes} from "@/lib/data/schedule";

type Props = { searchParams: Record<string, string | string[]> }

export default async function Page({searchParams}: Props) {
    const params = await searchParams
    const parsed = {
        rinkType: typeof params.rinkType === "string" ? params.rinkType : undefined,
        hasSchedule: typeof params.hasSchedule === "string" ? !!params.hasSchedule : undefined,
        metroIds: typeof params.metroIds === "string" ? params.metroIds.split(",") : undefined,
        districts: typeof params.districts === "string" ? params.districts.split(",") : undefined,
        sessionTypes: typeof params.sessionTypes === "string" ? params.sessionTypes.split(",") : undefined,
    }

    const rinks = await getIceRinksShortInfo(parsed)
    const sessionTypes = await getAllSessionTypes()


    return (
        <Flex gap={15} vertical>
            <RinksFilters sessionTypes={sessionTypes}/>
            {rinks.length > 0 ? <Row gutter={[16, 16]}>
                {rinks.map(rink => (
                    <Col key={rink.id} xs={24} sm={12} xl={8}>
                        <IceRinkShortInfo rink={rink}/>
                    </Col>
                ))}
            </Row> : <div className="text-center italic">{Object.keys(params).length > 0 ?
                "⛸️ Катков не найдено. Попробуйте изменить фильтры! ⛸️" :
                "⛸️ Тут пока нет катков, но мы работаем над этим ⛸️"
            }</div>}
        </Flex>
    )
}