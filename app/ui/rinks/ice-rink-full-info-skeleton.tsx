"use client"

import {Card, Flex, Skeleton, Space} from "antd"
import {Map, MapPin, Train} from "lucide-react"
import Title from "antd/es/typography/Title"

export function IceRinkFullInfoSkeleton() {
    return (
        <Card
            className="overflow-hidden p-0"
            cover={
                <Skeleton.Node
                    active
                    style={{height: 250, width: 1280}}
                />
            }
        >
            <Title level={3}>
                <Skeleton.Input active size="small" style={{width: 200}}/>
            </Title>
            <div className="flex gap-6">
                <Flex vertical gap={8} className="max-w-full">
                    <Space size="small" align="center">
                        <MapPin className="w-4 h-4 stroke-slate-400"/>
                        <Skeleton.Input active size="small" style={{width: 180}}/>
                    </Space>
                    <Space size="small" align="center">
                        <Map className="w-4 h-4 stroke-slate-400"/>
                        <Skeleton.Input active size="small" style={{width: 140}}/>
                    </Space>
                    <Space size="small" align="center" wrap>
                        <Train className="w-4 h-4 stroke-slate-400"/>
                        <Skeleton.Input active size="small" style={{width: 120}}/>
                    </Space>
                </Flex>
            </div>
        </Card>
    )
}
