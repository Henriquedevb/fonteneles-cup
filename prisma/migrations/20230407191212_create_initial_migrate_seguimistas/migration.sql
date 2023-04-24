-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "group_id" TEXT NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participation" (
    "id" TEXT NOT NULL,
    "participant_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
