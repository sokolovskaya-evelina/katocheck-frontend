import bcrypt from "bcrypt"
import { PrismaClient, UserRole, District, IceRinkType, SocialType, MetroStation } from "@/app/generated/prisma/client"
const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash("admin123", 10)

  // === 1. Катки ===
  const rinks = await prisma.$transaction([
    prisma.iceRink.create({
      data: {
        name: "Каток Северный",
        address: "ул. Примерная, 1",
        district: "KALININSKY",
        type: "INDOOR",
        latitude: 59.95,
        longitude: 30.33,
        email: "north@example.com",
        website: "https://north.example.com",
      },
    }),
    prisma.iceRink.create({
      data: {
        name: "Каток Южный",
        address: "пр. Южный, 55",
        district: "MOSKOVSKY",
        type: "OUTDOOR",
        latitude: 59.84,
        longitude: 30.32,
        email: "south@example.com",
        website: "https://south.example.com",
      },
    }),
  ])

  // === 2. Менеджеры ===
  await prisma.user.createMany({
    data: [
      {
        email: "north1@rink.ru",
        username: "Алексей С",
        password: passwordHash,
        role: "ADMIN",
        iceRinkId: rinks[0].id,
      },
      {
        email: "north2@rink.ru",
        username: "Виктория С",
        password: passwordHash,
        role: "ADMIN",
        iceRinkId: rinks[0].id,
      },
      {
        email: "south1@rink.ru",
        username: "Ирина Ю",
        password: passwordHash,
        role: "ADMIN",
        iceRinkId: rinks[1].id,
      },
      {
        email: "south2@rink.ru",
        username: "Сергей Ю",
        password: passwordHash,
        role: "ADMIN",
        iceRinkId: rinks[1].id,
      },
    ],
  })

  // === 3. Связанные данные для каждого катка ===
  for (const rink of rinks) {
    const arena = await prisma.arena.create({
      data: {
        name: "Главная арена",
        iceRinkId: rink.id,
      },
    })

    const sessionType = await prisma.sessionType.create({
      data: {
        name: "Свободное катание",
        iceRinkId: rink.id,
      },
    })

    const now = new Date()
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    await prisma.schedule.create({
      data: {
        date,
        startTime: new Date(date.getTime() + 10 * 60 * 60 * 1000), // 10:00
        endTime: new Date(date.getTime() + 11.5 * 60 * 60 * 1000), // 11:30
        arenaId: arena.id,
        sessionTypeId: sessionType.id,
        iceRinkId: rink.id,
      },
    })

    await prisma.phone.createMany({
      data: [
        {
          number: "+7 (812) 123-45-67",
          comment: "Администратор",
          iceRinkId: rink.id,
        },
        {
          number: "+7 (812) 987-65-43",
          comment: "Аренда льда",
          iceRinkId: rink.id,
        },
      ],
    })

    await prisma.socialLink.createMany({
      data: [
        {
          type: "INSTAGRAM",
          url: "https://instagram.com/" + rink.name.toLowerCase().replace(" ", "_"),
          iceRinkId: rink.id,
        },
        {
          type: "VK",
          url: "https://vk.com/" + rink.name.toLowerCase().replace(" ", "_"),
          iceRinkId: rink.id,
        },
      ],
    })

    await prisma.iceRinkMetro.create({
      data: {
        iceRinkId: rink.id,
        station: "AVTOVO", // для примера, можно рандомизировать
      },
    })
  }

  console.log("✅ Seed completed.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
