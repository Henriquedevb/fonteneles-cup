/*
  Warnings:

  - The primary key for the `MarketList` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MarketList" DROP CONSTRAINT "MarketList_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MarketList_pkey" PRIMARY KEY ("id");
