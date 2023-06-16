/*
  Warnings:

  - You are about to drop the column `addressId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_addressId_fkey";

-- DropIndex
DROP INDEX "users_addressId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "addressId",
ADD COLUMN     "address" JSONB NOT NULL;

-- DropTable
DROP TABLE "addresses";
