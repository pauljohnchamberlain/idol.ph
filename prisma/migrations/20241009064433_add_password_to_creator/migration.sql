/*
  Warnings:

  - Added the required column `password` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" ADD COLUMN     "password" TEXT NOT NULL;