//modelo de banco de dados // funcoes que rodam as rotas //Esse arquivo é responsável 
// por interagir diretamente com o banco de dados (usando Prisma no seu caso) e realizar as operações de CRUD.
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class InvestimentsModel {
    // Método para buscar todos os investimentos
    static async getAllInvestiments() {
        return await prisma.investimento.findMany();
    }
    // Método para buscar um investimento pelo ID
    static async getInvestmentById(id) {
        return await prisma.investimento.findUnique({
            where: { id },
        });
    }
    // Método para criar um novo investimento
    static async createInvestment(name, amount) {
        return await prisma.investimento.create({
            data: { name, amount },
        });
    }
    // Método para atualizar um investimento existente
    static async updateInvestment(id, name, amount) {
        return await prisma.investimento.update({
            where: { id },
            data: { name, amount },
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
