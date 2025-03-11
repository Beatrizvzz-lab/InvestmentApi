import { Prisma } from '@prisma/client';

// Testando os tipos do Prisma
type InvestimentoInput = Prisma.InvestimentoCreateInput;
type InvestimentoWhere = Prisma.InvestimentoWhereInput;

console.log('InvestimentoCreateInput:', {} as InvestimentoInput);
console.log('InvestimentoWhereInput:', {} as InvestimentoWhere);
