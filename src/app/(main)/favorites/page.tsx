import { mockRinks } from "@/mocks/mockData"
import IceRinkShortInfo from "@/components/IceRinkShortInfo/IceRinkShortInfo"
import { Row, Col } from "antd"

export default function Page() {
  return (
    <Row gutter={[16, 16]}>
      {mockRinks.map(rink => (
        <Col key={rink.rinkId} xs={24} sm={12} xl={8}>
          <IceRinkShortInfo rink={rink} />
        </Col>
      ))}
    </Row>
  )
}
