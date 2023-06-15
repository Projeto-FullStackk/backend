/*
  Warnings:

  - You are about to drop the column `userId` on the `ads` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_userId_fkey";

-- AlterTable
ALTER TABLE "ads" DROP COLUMN "userId";
