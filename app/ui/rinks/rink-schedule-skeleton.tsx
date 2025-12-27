"use client"

import { Collapse, Divider, Flex, Skeleton, Tag, Tabs } from "antd"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"

export function RinkScheduleSkeleton() {
  return (
    <Flex vertical gap={12}>
      <Flex vertical>
        <Tabs
          items={Array.from({ length: 5 }).map((_, i) => ({
            key: i.toString(),
            label: <Skeleton.Input active size="small" style={{ width: 80 }} />,
          }))}
          activeKey="0"
          type="card"
          size="small"
        />
        <Tabs
          items={Array.from({ length: 3 }).map((_, i) => ({
            key: i.toString(),
            label: <Skeleton.Input active size="small" style={{ width: 70 }} />,
          }))}
          activeKey="0"
          type="card"
          size="small"
        />
        <Tabs
          items={Array.from({ length: 3 }).map((_, i) => ({
            key: i.toString(),
            label: <Skeleton.Input active size="small" style={{ width: 90 }} />,
          }))}
          activeKey="0"
          type="card"
          size="small"
        />
      </Flex>

      <Collapse
        bordered={false}
        expandIconPosition="end"
        ghost
        size="small"
        items={Array.from({ length: 2 }).map((_, i) => ({
          key: i.toString(),
          label: (
            <Flex align="center" gap={15}>
              <CalendarIcon className="w-4 h-4 stroke-slate-400" />
              <Skeleton.Input active size="small" style={{ width: 140 }} />
            </Flex>
          ),
          className: "bg-white !rounded-xl mb-5",
          children: (
            <Flex vertical gap={15}>
              {Array.from({ length: 2 }).map((_, j) => (
                <Flex
                  key={j}
                  className="border border-slate-200 bg-gray-50 rounded-md p-2!"
                  justify="space-between"
                  align="center"
                  wrap="wrap"
                  gap={12}
                >
                  <Flex align="center" gap={8}>
                    <ClockIcon className="w-4 h-4 text-gray-400" />
                    <Skeleton.Input active size="small" style={{ width: 100 }} />
                  </Flex>

                  <Flex align="center" gap={8} wrap="wrap">
                    <Tag>
                      <Skeleton.Input active size="small" style={{ width: 100 }} />
                    </Tag>
                    <Divider type="vertical" />
                    <Flex align="center" gap={4}>
                      <MapPinIcon className="w-4 h-4 text-gray-400" />
                      <Skeleton.Input active size="small" style={{ width: 100 }} />
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ),
        }))}
      />
    </Flex>
  )
}
