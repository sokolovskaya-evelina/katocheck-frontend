import {RoleEnum} from "@/app/types/enums";
import {translateRole} from "@/app/lib/translations/admin/enum.translationts";

export const navItems = [
  { label: "Расписание", href: "/" },
  { label: "Катки", href: "/rinks" },
  { label: "О нас", href: "/about" },
]

export const roleOptions = Object.values(RoleEnum).map(option => ({
  value: option,
  label: translateRole(option as RoleEnum)
}))