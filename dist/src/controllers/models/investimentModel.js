//modelo de banco de dados // funcoes que rodam as rotas //Esse arquivo é responsável 
// por interagir diretamente com o banco de dados (usando Prisma no seu caso) e realizar as operações de CRUD.
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class InvestimentsModel {
    // Método para buscar todos os investimentos
    static async getAllInvestiments() {
        const investiments = await prisma.investimento.findMany();
        console.log(investiments);
        // Função para calcular rendimento futuro (juros compostos)
        const calcularRendimentoFuturo = (amount, rate, years) => {
            return amount * Math.pow(1 + rate / 100, years);
        };
        // Adiciona o cálculo de rendimento futuro a cada investimento
        return investiments.map((investimento) => {
            const taxaJuros = investimento.interestRate ?? 10; // Usa 10% se interestRate for null/undefined
            const periodo = 5; // Considerando projeção para 5 anos
            return {
                ...investimento,
                rendimentoFuturo: calcularRendimentoFuturo(investimento.amount, taxaJuros, periodo),
            };
        });
    }
    // Método para buscar um investimento pelo ID
    static async getInvestmentById(id) {
        return await prisma.investimento.findUnique({
            where: { id },
        });
    }
    // Método para criar um novo investimento
    static async createInvestment(name, amount, interestRate, investmentPeriod) {
        if (interestRate == null || investmentPeriod == null) {
            throw new Error("interestRate e investmentPeriod são obrigatórios.");
        }
        return await prisma.investimento.create({
            data: { name, amount, interestRate, investmentPeriod },
        });
    }
    // Método para atualizar um investimento existente
    static async updateInvestment(id, name, amount, interestRate, investmentPeriod // Adicione este parâmetro
    ) {
        return await prisma.investimento.update({
            where: { id },
            data: { name, amount, interestRate, investmentPeriod }, // Inclua investmentPeriod
        });
    }
    // Método para deletar um investimento
    static async deleteInvestment(id) {
        return await prisma.investimento.delete({
            where: { id },
        });
    }
}
export default InvestimentsModel;
