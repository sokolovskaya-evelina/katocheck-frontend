import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function IceRinkFullInfoSkeleton() {
  return (
    <Card className="mb-4 overflow-hidden p-0">
      <Skeleton className="w-full h-[250px]" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6">
        <div className="space-y-2 w-full">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton className="h-10 w-40" />
      </div>
    </Card>
  )
}

function RinkScheduleAccordionSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="p-4 space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-6 w-full" />
        </Card>
      ))}
    </div>
  )
}

function MapComponentSkeleton() {
  return <Skeleton className="h-[530px] w-full rounded-lg" />
}

export default function RinkPageSkeleton() {
  return (
    <div className="space-y-4">
      <IceRinkFullInfoSkeleton />
      <div className="flex flex-col lg:flex-row items-start gap-4">
        <div className="w-full lg:w-1/2">
          <RinkScheduleAccordionSkeleton />
        </div>
        <div className="w-full lg:w-1/2">
          <MapComponentSkeleton />
        </div>
      </div>
    </div>
  )
}
