/*
  Warnings:

  - Added the required column `password` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN "password" TEXT NOT NULL DEFAULT 'defaultpassword';
