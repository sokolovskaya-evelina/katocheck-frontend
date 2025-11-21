import {DistrictEnum, RinkTypeEnum, RoleEnum} from "@/app/types/enums";
import {translateDistrict, translateRinkType, translateRole} from "@/app/lib/translations/admin/enum.translationts";

export const navItems = [
  { label: "Расписание", href: "/" },
  { label: "Катки", href: "/rinks" },
  { label: "О нас", href: "/about" },
]

export const roleOptions = Object.values(RoleEnum).map(option => ({
  value: option,
  label: translateRole(option as RoleEnum)
}))

export const districtOptions = Object.values(DistrictEnum).map(option => ({
  value: option,
  label: translateDistrict(option as DistrictEnum)
}))

export const rinkTypeOptions = Object.values(RinkTypeEnum).map(option => ({
  value: option,
  label: translateRinkType(option as RinkTypeEnum)
}))