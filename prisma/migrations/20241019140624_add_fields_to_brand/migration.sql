/*
  Warnings:

  - You are about to drop the column `location` on the `Brand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "location",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "brn" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "companyType" TEXT,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "website" TEXT;
