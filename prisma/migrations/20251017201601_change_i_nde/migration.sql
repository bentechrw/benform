/*
  Warnings:

  - Added the required column `indexNumber` to the `UniversityApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UniversityApplication` ADD COLUMN `indexNumber` VARCHAR(200) NOT NULL;
