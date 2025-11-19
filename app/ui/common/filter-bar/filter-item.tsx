import DatePicker, { DatePickerProps, RangePickerProps } from "antd/es/date-picker"
import Input, { InputProps } from "antd/es/input"
import InputNumber, { InputNumberProps } from "antd/es/input-number"
import Select, { SelectProps } from "antd/es/select"
import { FilterBarItem } from "./types/filter.types"
import TimePicker, { TimeRangePickerProps } from "antd/es/time-picker"
import dayjs from "../../../lib/dayjs"

interface FilterItemProps {
  item: FilterBarItem
  value: any
  onChange: (value: any) => void
}

export function FilterItem({ item, value, onChange }: FilterItemProps) {
  const { type, ...props } = item

  const commonProps = {
    className: "grow",
    value,
    onChange,
    ...(type === "select" &&
      item.mode === "multiple" && {
        onChange: (e: any) => onChange(e.length ? e : undefined),
      }),
    ...(type === "text" && {
      onChange: (e: any) => onChange(e.target.value ? e.target.value : undefined),
    }),
    ...(type === "time-range" && {
      value: [dayjs(value[0]), dayjs(value[1])],
    }),
    ...(type === "date-range" && {
      value: [dayjs(value[0]), dayjs(value[1])],
    }),
  }

  const components = {
    text: <Input {...(props as InputProps)} {...commonProps} />,
    number: <InputNumber {...(props as InputNumberProps)} {...commonProps} />,
    select: <Select {...(props as SelectProps)} {...commonProps} />,
    date: <DatePicker {...(props as DatePickerProps)} {...commonProps} />,
    "date-range": <DatePicker.RangePicker {...(props as RangePickerProps)} {...commonProps} />,
    "time-range": <TimePicker.RangePicker {...(props as TimeRangePickerProps)} {...commonProps} />,
  }

  return components[type]
}
