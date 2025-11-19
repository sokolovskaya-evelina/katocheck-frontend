import { DatePickerProps, RangePickerProps } from "antd/es/date-picker"
import { InputProps } from "antd/es/input"
import { InputNumberProps } from "antd/es/input-number"
import { SelectProps } from "antd/es/select"
import { TimeRangePickerProps } from "antd/es/time-picker"

export type FilterState = Record<string, any>

export type FilterBarItem = {
  name: string
  label: string
} & (
  | ({
      type: "text"
    } & InputProps)
  | ({
      type: "number"
    } & InputNumberProps)
  | ({
      type: "select"
    } & SelectProps)
  | ({
      type: "date"
    } & DatePickerProps)
  | ({
      type: "date-range"
    } & RangePickerProps)
  | ({
      type: "time-range"
    } & TimeRangePickerProps)
)
