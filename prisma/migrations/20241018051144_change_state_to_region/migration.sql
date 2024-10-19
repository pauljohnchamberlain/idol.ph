/*
  Warnings:

  - You are about to drop the column `state` on the `Creator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "state",
ADD COLUMN     "region" TEXT;
