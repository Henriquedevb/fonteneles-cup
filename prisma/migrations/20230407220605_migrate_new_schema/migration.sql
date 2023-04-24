/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParticipantGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ParticipantGroup" DROP CONSTRAINT "ParticipantGroup_group_id_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantGroup" DROP CONSTRAINT "ParticipantGroup_participant_id_fkey";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "Participant";

-- DropTable
DROP TABLE "ParticipantGroup";

-- CreateTable
CREATE TABLE "Seguimistas" (
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
    "year_of_participation_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "Seguimistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YearOfParticipation" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "YearOfParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seguimistas" ADD CONSTRAINT "Seguimistas_year_of_participation_id_fkey" FOREIGN KEY ("year_of_participation_id") REFERENCES "YearOfParticipation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguimistas" ADD CONSTRAINT "Seguimistas_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
