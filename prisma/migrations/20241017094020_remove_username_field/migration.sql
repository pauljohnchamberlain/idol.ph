/*
  Warnings:

  - You are about to drop the column `username` on the `Creator` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Creator_username_key";

-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "username";
