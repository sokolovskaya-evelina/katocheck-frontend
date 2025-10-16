"use client"

import { Card, Skeleton, Flex, Badge } from "antd"
import { CalendarIcon } from "lucide-react"

export default function Loading() {
  const items = Array.from({ length: 2 }) // 2 даты (аккордеона)
  const entriesPerDay = 2

  return (
    <Flex vertical gap={15}>
      <Card>
        <Flex wrap="wrap" gap={15}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton.Input key={i} active style={{ width: 200 }} />
          ))}
          <Skeleton.Button active style={{ width: 100 }} />
        </Flex>
      </Card>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {items.map((_, dateIndex) => (
          <Card key={dateIndex} className="!rounded-xl shadow-sm">
            <Flex gap={10} align="center" className="mb-3">
              <CalendarIcon className="w-4 h-4 stroke-slate-500" />
              <Skeleton.Input active size="small" style={{ width: 150 }} />
            </Flex>

            <Flex vertical gap={10}>
              {Array.from({ length: entriesPerDay }).map((_, entryIndex) => (
                <Flex
                  key={entryIndex}
                  justify="space-between"
                  align="start"
                  gap={15}
                  className="rounded-lg border !p-2 bg-gray-50"
                >
                  <Flex vertical gap={8}>
                    <Skeleton.Input active size="small" style={{ width: 100 }} />
                    <Flex gap={5}>
                      <Badge color="blue" />
                      <Badge color="green" />
                    </Flex>
                  </Flex>

                  <Flex align="start" gap={10}>
                    <Flex vertical align="end" gap={5}>
                      <Skeleton.Input active size="small" style={{ width: 60 }} />
                      <Skeleton.Button active size="small" style={{ width: 100, height: 20 }} />
                    </Flex>
                    <Skeleton.Avatar active size="default" shape="circle" />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Card>
        ))}
      </div>
    </Flex>
  )
}
