import prisma from "@/lib/prisma"

export const getAllIceRinks = async () => {
    return prisma.iceRink.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: { name: "asc" },
    })
}
