-- CreateTable
CREATE TABLE "MarketList" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "MarketList_pkey" PRIMARY KEY ("id")
);
