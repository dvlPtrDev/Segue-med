/*
  Warnings:

  - You are about to drop the column `patient_id` on the `customer_service` table. All the data in the column will be lost.
  - You are about to drop the column `pharmacist_id` on the `customer_service` table. All the data in the column will be lost.
  - You are about to drop the column `patient_id` on the `exams` table. All the data in the column will be lost.
  - You are about to drop the column `patient_id` on the `health_related` table. All the data in the column will be lost.
  - You are about to drop the column `patient_id` on the `prescriptions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "customer_service" DROP CONSTRAINT "customer_service_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "customer_service" DROP CONSTRAINT "customer_service_pharmacist_id_fkey";

-- DropForeignKey
ALTER TABLE "exams" DROP CONSTRAINT "exams_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "health_related" DROP CONSTRAINT "health_related_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "prescriptions" DROP CONSTRAINT "prescriptions_patient_id_fkey";

-- DropIndex
DROP INDEX "health_related_patient_id_key";

-- AlterTable
ALTER TABLE "customer_service" DROP COLUMN "patient_id",
DROP COLUMN "pharmacist_id";

-- AlterTable
ALTER TABLE "exams" DROP COLUMN "patient_id";

-- AlterTable
ALTER TABLE "health_related" DROP COLUMN "patient_id";

-- AlterTable
ALTER TABLE "prescriptions" DROP COLUMN "patient_id";
