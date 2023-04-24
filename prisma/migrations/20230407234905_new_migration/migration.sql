/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seguimista` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_seguimista_id_fkey";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "Seguimista";

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

    CONSTRAINT "Seguimistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_seguimista_id_fkey" FOREIGN KEY ("seguimista_id") REFERENCES "Seguimistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
