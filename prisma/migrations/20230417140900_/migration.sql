/*
  Warnings:

  - You are about to drop the column `encoding` on the `Avatar` table. All the data in the column will be lost.
  - You are about to drop the column `seguimistasId` on the `Avatar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Avatar" DROP COLUMN "encoding",
DROP COLUMN "seguimistasId";
