/*
  Warnings:

  - Added the required column `skillImage` to the `Skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skills" ADD COLUMN     "skillImage" TEXT NOT NULL;
