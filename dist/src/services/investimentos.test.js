import InvestimentModel from '../controllers/models/investimentModel';
import { PrismaClient } from '@prisma/client';
// Mockando o PrismaClient
jest.mock('@prisma/client', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            investimento: {
                findMany: jest.fn(),
            },
        })),
    };
});
describe('InvestimentModel', () => {
    let prismaMock;
    beforeAll(() => {
        prismaMock = new PrismaClient(); // Aqui estamos criando a instância mockada
        prismaMock.investimento.findMany.mockResolvedValue([
            {
                id: 16,
                name: 'Criptomoeda',
                amount: 5000,
                interestRate: 12,
                investmentPeriod: 12,
                createdAt: '2025-02-27T15:10:05.989Z',
                rendimentoFuturo: 8811.708416000003,
            },
            {
                id: 17,
                name: 'Imóvel',
                amount: 4000,
                interestRate: 0.5,
                investmentPeriod: 12,
                createdAt: '2025-02-27T16:05:19.351Z',
            },
        ]);
    });
    it('deve calcular o rendimento futuro corretamente', async () => {
        const investimentos = await InvestimentModel.getAllInvestiments();
        // Cálculo correto do rendimento futuro
        // 5000 * (1 + 12/100) ^ 12 meses
        expect(investimentos[0].rendimentoFuturo).toBeCloseTo(5000 * Math.pow(1 + 12 / 100, 12), 2); // Verificando o cálculo de Criptomoeda
        // 4000 * (1 + 0.5/100) ^ 12 meses
        expect(investimentos[1].rendimentoFuturo).toBeCloseTo(4000 * Math.pow(1 + 0.5 / 100, 12), 2); // Verificando o cálculo de Imóvel
    });
    it('deve retornar investimentos corretamente', async () => {
        const investimentos = await InvestimentModel.getAllInvestiments();
        expect(investimentos).toHaveLength(2); // Verificando que temos 2 investimentos
        expect(investimentos[0]).toHaveProperty('id');
        expect(investimentos[0]).toHaveProperty('name');
    });
});
