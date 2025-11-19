/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'PARENT', 'CHILD', 'ATHLETE');

-- CreateEnum
CREATE TYPE "District" AS ENUM ('ADMIRALTEYSKY', 'VASILEOSTROVSKY', 'VYBORGSKY', 'KALININSKY', 'KIROVSKY', 'KOLPINSKY', 'KRASNOGVARDEYSKY', 'KRASNOSELSKY', 'KRONSTADTSKY', 'KURORTNY', 'MOSKOVSKY', 'NEVSKY', 'PETROGRADSKY', 'PETRODVORETSOVY', 'PRIMORSKY', 'PUSHKINSKY', 'FRUNZENSKY', 'CENTRALNY');

-- CreateEnum
CREATE TYPE "MetroStation" AS ENUM ('AVTOVO', 'AKADEMICHESKAYA', 'BALTISKAYA');

-- CreateEnum
CREATE TYPE "SocialType" AS ENUM ('INSTAGRAM', 'TELEGRAM', 'VK');

-- CreateEnum
CREATE TYPE "IceRinkType" AS ENUM ('INDOOR', 'OUTDOOR');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "iceRinkId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ice_rinks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" "District",
    "website" TEXT,
    "email" TEXT,
    "type" "IceRinkType" NOT NULL DEFAULT 'INDOOR',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ice_rinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ice_rink_metro" (
    "id" TEXT NOT NULL,
    "iceRinkId" TEXT NOT NULL,
    "station" "MetroStation" NOT NULL,

    CONSTRAINT "ice_rink_metro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "comment" TEXT,
    "iceRinkId" TEXT NOT NULL,

    CONSTRAINT "phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_links" (
    "id" TEXT NOT NULL,
    "type" "SocialType" NOT NULL,
    "url" TEXT NOT NULL,
    "iceRinkId" TEXT NOT NULL,

    CONSTRAINT "social_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arenas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iceRinkId" TEXT NOT NULL,

    CONSTRAINT "arenas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iceRinkId" TEXT NOT NULL,

    CONSTRAINT "session_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "iceRinkId" TEXT NOT NULL,
    "arenaId" TEXT NOT NULL,
    "sessionTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ice_rink_metro_iceRinkId_station_key" ON "ice_rink_metro"("iceRinkId", "station");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ice_rink_metro" ADD CONSTRAINT "ice_rink_metro_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_links" ADD CONSTRAINT "social_links_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arenas" ADD CONSTRAINT "arenas_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_types" ADD CONSTRAINT "session_types_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_iceRinkId_fkey" FOREIGN KEY ("iceRinkId") REFERENCES "ice_rinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "arenas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_sessionTypeId_fkey" FOREIGN KEY ("sessionTypeId") REFERENCES "session_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
