import { RoleEnum, UserEnum } from "@/types/enums"

export function translateRole(role: RoleEnum) {
  return {
    [RoleEnum.Admin]: "Администратор",
    [RoleEnum.SuperAdmin]: "Суперадмин",
  }[role]
}

export function translateUserType(type: UserEnum) {
  return {
    [UserEnum.Sportsman]: "Спортсмен",
    [UserEnum.Coach]: "Тренер",
    [UserEnum.Parent]: "Родитель",
  }[type]
}
