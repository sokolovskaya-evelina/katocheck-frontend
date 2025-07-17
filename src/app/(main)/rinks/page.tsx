import IceRinkShortInfo from "@/components/IceRinkShortInfo/IceRinkShortInfo"
import { mockRinks } from "@/mocks/mockData"
import { Row, Col, Flex } from "antd"
import RinksFilters from "./components/RinksFilters/RinksFilters"

export default function Page() {
  return (
    <Flex gap={15} vertical>
      <RinksFilters />
      <Row gutter={[16, 16]}>
        {mockRinks
          .filter(rink => rink.isFavorite)
          .map(rink => (
            <Col key={rink.rinkId} xs={24} sm={12} xl={8}>
              <IceRinkShortInfo rink={rink} />
            </Col>
          ))}
      </Row>
    </Flex>
  )
}
