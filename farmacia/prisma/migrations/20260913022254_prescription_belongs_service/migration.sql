/*
  Warnings:

  - You are about to drop the column `record_id` on the `prescriptions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "prescriptions" DROP CONSTRAINT "prescriptions_record_id_fkey";

-- AlterTable
ALTER TABLE "prescriptions" DROP COLUMN "record_id";
