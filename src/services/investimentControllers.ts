import prisma from '../prisma.js';
import InvestimentsModel from '../controllers/models/investimentModel.js';
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

// Função para obter todos os investimentos
export const getInvestiments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId; // Obtém o userId do token
        if (!userId) {
            res.status(400).json({ error: 'userId é obrigatório.' });
            return;
        }

    const investiments = await InvestimentsModel.getAllInvestiments(userId); // usa o await pois colocamos uma função assíncrona
    res.status(200).json(investiments);
  } catch (error) {
    next(error);
  }
};

// Função para criar um novo investimento (POST /investments)
export const createInvestiment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { name, amount, interestRate, investmentPeriod } = req.body; // pega os dados do corpo da requisição
    const userId = req.userId; // Obtém o userId do token

    if (!userId) {
      res.status(400).json({ error: 'userId é obrigatório para criar um investimento.' });
      return;
    }

    const create = await InvestimentsModel.createInvestment(name, amount, interestRate, investmentPeriod, userId); // passa os parâmetros dentro da função de criação
    res.status(201).json(create); // Alterado para 201, que é o status adequado para criação
  } catch (error) {
    next(error);
  }
};

// Função para atualizar um investimento
export const updateInvestiment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { id } = req.params;
    const { name, amount, interestRate, investmentPeriod } = req.body;
    const update = await InvestimentsModel.updateInvestment(Number(id), name, amount, interestRate, investmentPeriod);
    res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

// Função para deletar um investimento
export const deleteInvestiment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { id } = req.params;
    const delet = await InvestimentsModel.deleteInvestment(Number(id));
    res.status(200).json(delet);
  } catch (error) {
    next(error);
  }
};

// Função para obter os dados do painel de investimentos
export const getDashboardData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId; // Obtendo o userId do token

    if (!userId) {
      res.status(400).json({ error: "userId não fornecido." });
      return;
    }

    // Buscar investimentos do usuário
    const investments = await prisma.investimento.findMany({
      where: { userId }, //  o userId para filtrar os investimentos
      select: {
        id: true,
        name: true,
        amount: true,
        interestRate: true,
        investmentPeriod: true,
        createdAt: true,
      }
    });

    // Cálculo da projeção de rendimento
    const projectedInvestments = investments.map((inv) => {
      const finalAmount = inv.amount * Math.pow(1 + inv.interestRate / 100, inv.investmentPeriod);
      return {
        id: inv.id,
        name: inv.name,
        initialAmount: inv.amount,
        projectedAmount: finalAmount.toFixed(2),
        investmentPeriod: inv.investmentPeriod,
        createdAt: inv.createdAt,
      };
    });

    // Retornando os dados formatados
    res.status(200).json({ investments: projectedInvestments });
  } catch (error) {
    next(error);
  }
};
