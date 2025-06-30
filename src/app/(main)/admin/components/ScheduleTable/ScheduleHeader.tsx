import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ScheduleHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Начало</TableHead>
        <TableHead>Конец</TableHead>
        <TableHead>Тип</TableHead>
        <TableHead>Арена</TableHead>
        <TableHead>Примечание</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  )
}
