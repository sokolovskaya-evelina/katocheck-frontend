"use client"

import {Card, Col, Flex, Row, Skeleton} from "antd"

export default function Loading() {
    return (
    <Flex vertical gap={15}>
        <div className="flex justify-end mt-2 mb-2">
            <Skeleton.Button active style={{ width: 121 }} />
        </div>
        <Row gutter={[16, 16]}>
        {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx} xs={24} sm={12} xl={8}>
                <Card
                    title={
                        <Skeleton
                            active
                            title={{ width: "80%" }}
                            paragraph={false}
                        />
                    }
                >
                    <Flex vertical gap={5}>
                        <Flex vertical gap={5}>
                        <Flex align="center" gap={5}>
                            <Skeleton.Input active size="small" style={{ width: "60%" }} />
                        </Flex>
                        <Flex gap={5}>
                            <Skeleton.Input active size="small" style={{ width: "50%" }} />
                            <Skeleton.Input active size="small" style={{ width: "30%" }} />
                        </Flex>
                    </Flex>
                        <Flex justify="flex-end">
                            <Skeleton.Input active size="small" style={{ width: 100 }} />
                        </Flex>
                    </Flex>

                </Card>
            </Col>
        ))}
        </Row>
    </Flex>
  )
}
