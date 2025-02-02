-- CreateTable
CREATE TABLE "Superhero" (
    "id" SERIAL NOT NULL,
    "superhero_name" TEXT NOT NULL,
    "superpower" TEXT NOT NULL,
    "humility_score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Superhero_pkey" PRIMARY KEY ("id")
);
