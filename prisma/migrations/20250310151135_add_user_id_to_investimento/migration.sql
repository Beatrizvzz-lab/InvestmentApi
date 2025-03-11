-- AlterTable
ALTER TABLE "Investimento" ALTER COLUMN "userId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Investimento" ADD CONSTRAINT "Investimento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
