import Map from "../components/Map/Map"
import IceRinkFullInfo from "./../components/IceRinkFullInfo/IceRinkFullInfo"
import { mockRink } from "@/mocks/mockData"
import { RinkScheduleAccordion } from "./../components/RinkScheduleAccordion/RinkScheduleAccordion"
import { Card, Row, Col, Space } from "antd"

export default function Page() {
  return (
    <Space direction="vertical" size="large" className="w-full">
      <IceRinkFullInfo rink={mockRink} />

      <Row gutter={[16, 16]} align="top">
        <Col xs={24} lg={12}>
          <RinkScheduleAccordion schedule={mockRink.schedule} />
        </Col>
        <Col xs={24} lg={12}>
          <Card>
            <Map location={[60.036484, 30.306125]} />
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
