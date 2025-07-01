import { ReactNode, useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import { X } from "lucide-react"

export type MultiSelectOption = {
  value: string
  label: ReactNode
}

export type MultiSelectGroup = {
  label: string
  options: MultiSelectOption[]
}

type Props = {
  groups: MultiSelectGroup[]
  value: string[]
  onChange: (value: string[]) => void
  renderTag?: (option: MultiSelectOption, remove: () => void) => ReactNode
  customDropdown?: ReactNode
  maxTagsCount?: number
}

export default function MultiSelect({
  groups,
  value,
  onChange,
  renderTag,
  customDropdown,
  maxTagsCount,
}: Props) {
  const [open, setOpen] = useState(false)

  const allOptions = groups.flatMap(g => g.options)

  const toggle = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter(v => v !== val))
    } else {
      onChange([...value, val])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start flex-wrap min-h-[40px]">
          {value.length === 0 ? (
            <span className="text-muted-foreground">Выберите опции</span>
          ) : (
            <div className="flex flex-wrap gap-1">
              {value.slice(0, maxTagsCount ?? value.length).map(val => {
                const opt = allOptions.find(o => o.value === val)
                if (!opt) return null
                return renderTag ? (
                  renderTag(opt, () => toggle(val))
                ) : (
                  <span
                    key={val}
                    className="flex items-center px-2 py-1 bg-muted rounded-full text-sm"
                  >
                    {opt.label}
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={e => {
                        e.stopPropagation()
                        toggle(val)
                      }}
                    />
                  </span>
                )
              })}
              {maxTagsCount !== undefined && value.length > maxTagsCount && (
                <span className="px-2 py-1 text-sm bg-muted rounded-full">
                  +{value.length - maxTagsCount}…
                </span>
              )}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        {customDropdown ? (
          customDropdown
        ) : (
          <Command>
            <CommandInput placeholder="Поиск..." />
            <CommandEmpty>Ничего не найдено</CommandEmpty>
            {groups.map(group => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.options.map(opt => (
                  <CommandItem key={opt.value} onSelect={() => toggle(opt.value)}>
                    <div className="flex items-center justify-between w-full">
                      <span>{opt.label}</span>
                      {value.includes(opt.value) && <span className="text-primary text-sm">✓</span>}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </Command>
        )}
      </PopoverContent>
    </Popover>
  )
}
