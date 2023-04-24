/*
  Warnings:

  - You are about to drop the column `avatar` on the `Seguimistas` table. All the data in the column will be lost.
  - You are about to drop the column `role_in_event` on the `Seguimistas` table. All the data in the column will be lost.
  - You are about to drop the `Participation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_seguimista_id_fkey";

-- AlterTable
ALTER TABLE "Seguimistas" DROP COLUMN "avatar",
DROP COLUMN "role_in_event",
ADD COLUMN     "avatarId" TEXT;

-- DropTable
DROP TABLE "Participation";

-- CreateTable
CREATE TABLE "Avatar" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "encoding" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "seguimistasId" TEXT NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participations" (
    "id" TEXT NOT NULL,
    "seguimista_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Participations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seguimistas" ADD CONSTRAINT "Seguimistas_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participations" ADD CONSTRAINT "Participations_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participations" ADD CONSTRAINT "Participations_seguimista_id_fkey" FOREIGN KEY ("seguimista_id") REFERENCES "Seguimistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
