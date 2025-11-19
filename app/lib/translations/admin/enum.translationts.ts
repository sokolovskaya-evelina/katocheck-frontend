import { RoleEnum } from "../../../types/enums"

export function translateRole(role: RoleEnum) {
  return {
    [RoleEnum.Admin]: "Администратор",
    [RoleEnum.SuperAdmin]: "Суперадмин",
    [RoleEnum.Sportsman]: "Спортсмен",
    [RoleEnum.Coach]: "Тренер",
    [RoleEnum.Parent]: "Родитель",
  }[role]
}
