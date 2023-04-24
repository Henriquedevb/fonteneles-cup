/*
  Warnings:

  - You are about to drop the column `group_id` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the `Participation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `year` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Made the column `date_of_birth` on table `Participant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_participant_id_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "group_id",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "landline_phone" TEXT,
ADD COLUMN     "mobile_phone" TEXT,
ADD COLUMN     "neighborhood" TEXT,
ADD COLUMN     "nickname" TEXT,
ADD COLUMN     "profession" TEXT,
ADD COLUMN     "role_in_event" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "date_of_birth" SET NOT NULL,
ALTER COLUMN "date_of_birth" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Participation";

-- CreateTable
CREATE TABLE "ParticipantGroup" (
    "id" TEXT NOT NULL,
    "participant_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "ParticipantGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ParticipantGroup" ADD CONSTRAINT "ParticipantGroup_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantGroup" ADD CONSTRAINT "ParticipantGroup_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
