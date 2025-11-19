import { Row, Col, Flex } from "antd"
import RinksFilters from "@/app/ui/rinks/rinks-filters";
import {mockRinks} from "@/mocks/mockData";
import IceRinkShortInfo from "@/app/ui/rinks/ice-rink-short-info";

export default function Page() {
  return (
    <Flex gap={15} vertical>
      <RinksFilters />
      <Row gutter={[16, 16]}>
        {mockRinks.map(rink => (
          <Col key={rink.rinkId} xs={24} sm={12} xl={8}>
            <IceRinkShortInfo rink={rink} />
          </Col>
        ))}
      </Row>
    </Flex>
  )
}
