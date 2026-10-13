/*
  Warnings:

  - You are about to drop the column `patient_id` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `pharmacies` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `pharmacies` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address_id]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address_id]` on the table `pharmacies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pharmacy_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birth_date` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "pharmacies" DROP CONSTRAINT "pharmacies_cityId_fkey";

-- DropIndex
DROP INDEX "addresses_patient_id_key";

-- DropIndex
DROP INDEX "users_cpf_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "patient_id";

-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "address_id" INTEGER,
ADD COLUMN     "birth_date" DATE NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "pharmacies" DROP COLUMN "address",
DROP COLUMN "cityId",
ADD COLUMN     "address_id" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "birth_date",
DROP COLUMN "cpf",
DROP COLUMN "name",
DROP COLUMN "phone";

-- CreateIndex
CREATE UNIQUE INDEX "patients_address_id_key" ON "patients"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "patients_cpf_key" ON "patients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "pharmacies_address_id_key" ON "pharmacies"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_pharmacy_id_key" ON "users"("pharmacy_id");

-- AddForeignKey
ALTER TABLE "pharmacies" ADD CONSTRAINT "pharmacies_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
