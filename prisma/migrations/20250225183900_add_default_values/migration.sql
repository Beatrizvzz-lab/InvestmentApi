/*
  Warnings:

  - Made the column `interestRate` on table `Investimento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `investmentPeriod` on table `Investimento` required. This step will fail if there are existing NULL values in that column.

*/
-- Atualiza os registros existentes com valores padrão
UPDATE "Investimento" SET "interestRate" = 0 WHERE "interestRate" IS NULL;
UPDATE "Investimento" SET "investmentPeriod" = 0 WHERE "investmentPeriod" IS NULL;

-- Torna as colunas obrigatórias e define valores padrão
ALTER TABLE "Investimento" 
    ALTER COLUMN "interestRate" SET NOT NULL,
    ALTER COLUMN "interestRate" SET DEFAULT 0,
    ALTER COLUMN "investmentPeriod" SET NOT NULL,
    ALTER COLUMN "investmentPeriod" SET DEFAULT 0;
    ALTER TABLE "Investimento" ADD COLUMN "userId" INTEGER NOT NULL DEFAULT 1;
