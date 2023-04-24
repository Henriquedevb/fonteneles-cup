/*
  Warnings:

  - You are about to drop the `Groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seguimistas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YearOfParticipation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Seguimistas" DROP CONSTRAINT "Seguimistas_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Seguimistas" DROP CONSTRAINT "Seguimistas_year_of_participation_id_fkey";

-- DropTable
DROP TABLE "Groups";

-- DropTable
DROP TABLE "Seguimistas";

-- DropTable
DROP TABLE "YearOfParticipation";

-- CreateTable
CREATE TABLE "Seguimista" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "full_name" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "nickname" TEXT,
    "profession" TEXT,
    "address" TEXT,
    "neighborhood" TEXT,
    "city" TEXT,
    "role_in_event" TEXT,
    "email" TEXT,
    "mobile_phone" TEXT,
    "landline_phone" TEXT,

    CONSTRAINT "Seguimista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participation" (
    "id" TEXT NOT NULL,
    "seguimista_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_seguimista_id_fkey" FOREIGN KEY ("seguimista_id") REFERENCES "Seguimista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
