/*
  Warnings:

  - You are about to drop the column `pharmacy_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `pharmacies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `pharmacies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_pharmacy_id_fkey";

-- DropIndex
DROP INDEX "users_pharmacy_id_key";

-- AlterTable
ALTER TABLE "pharmacies" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "pharmacy_id";

-- CreateIndex
CREATE UNIQUE INDEX "pharmacies_user_id_key" ON "pharmacies"("user_id");

-- AddForeignKey
ALTER TABLE "pharmacies" ADD CONSTRAINT "pharmacies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
