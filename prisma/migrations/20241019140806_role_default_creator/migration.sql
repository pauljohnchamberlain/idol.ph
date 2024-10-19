-- AlterTable
ALTER TABLE "Brand" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'creator';
