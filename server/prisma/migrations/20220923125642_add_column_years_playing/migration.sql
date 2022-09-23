/*
  Warnings:

  - You are about to drop the column `playerAge` on the `ads` table. All the data in the column will be lost.
  - Added the required column `yearsPlaying` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ads` DROP COLUMN `playerAge`,
    ADD COLUMN `yearsPlaying` INTEGER NOT NULL;
