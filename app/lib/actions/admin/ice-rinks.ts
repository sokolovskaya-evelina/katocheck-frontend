"use server"
import { revalidatePath } from "next/cache"

import { RinkTypeEnum } from "@/app/types/enums"
import { prisma } from "@/lib/prisma"

export async function getAllRinks() {
  return prisma.iceRink.findMany({
    include: {
      managers: true,
    },
    orderBy: { name: "asc" },
  })
}

type CreateRinkInput = {
  name: string
}

export async function createRink(data: CreateRinkInput) {
  await prisma.iceRink.create({
    data: {
      name: data.name,
      address: "",
      type: RinkTypeEnum.Indoor,
    },
  })
  revalidatePath("/admin")
}

export async function updateRink(id: string, data: any) {
  return prisma.iceRink.update({
    where: { id },
    data,
  })
}

export async function deleteRink(id: string) {
  return prisma.iceRink.delete({ where: { id } })
}
