"use client"

import { Collapse, Flex, Skeleton } from "antd"

const generateSkeletonItem = (index: string) => ({
  key: index,
  label: (
    <div className="flex items-center gap-4">
      <div className="w-4 h-4 bg-slate-300 rounded-full" />
      <Skeleton.Input active size="small" className="w-[120px]" />
    </div>
  ),
  children: (
    <div className="flex flex-col gap-4">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="p-3 bg-gray-50 border rounded-md space-y-2">
          <Skeleton.Input active size="small" className="w-32" />
          <Skeleton.Input active size="small" className="w-24" />
          <Skeleton.Button active size="small" className="w-full" />
        </div>
      ))}
    </div>
  ),
  className: "bg-white !rounded-xl border shadow-sm px-4 mb-4",
})


export default function Loading() {
  const columns = [0, 1, 2].map((col) => {
    const items = [...Array(col === 2 ? 2 : 3)].map((_, i) => generateSkeletonItem(`${col}-${i}`))
    return (
      <Collapse
        key={col}
        accordion
        items={items}
        bordered={false}
        expandIconPosition="end"
        ghost
        className=" grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-start"
      />
    )
  })


  return (
    <Flex vertical gap={15}>
      <div className="flex justify-end mt-2 mb-2">
        <Skeleton.Button active style={{ width: 121 }} />
      </div>
      <div>
        {columns}
      </div>
    </Flex>
  )
}
