/*
  Warnings:

  - You are about to drop the `Avatar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Seguimistas" DROP CONSTRAINT "Seguimistas_avatarId_fkey";

-- DropTable
DROP TABLE "Avatar";
