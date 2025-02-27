import InvestimentsModel from '../controllers/models/investimentModel.js';
import { validationResult } from "express-validator";
export const getInvestiments = async (req, res, next) => {
    try {
        // Chamando o método 'getAllInvestments' - que vem do model, que retorna todos os investimentos do banco
        const investiments = await InvestimentsModel.getAllInvestiments(); // usa o await pois colocamos uma funcao assincrona
        res.status(200).json(investiments);
    }
    catch (error) {
        next(error);
        res.status(500).json({ message: 'erro ao buscar investimentos', error });
    }
};
// Função para criar um novo investimento (POST /investments)
export const createInvestiment = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, amount } = req.body; // pega os dados do corpo da requisicao, nome e o valor do investimento
        const create = await InvestimentsModel.createInvestment(name, amount); //passa os parametros dentro da duncao de criar
        res.status(200).json(create);
    }
    catch (error) {
        next(error);
        res.status(500).json({ message: 'erro ao criar investimentos' });
    }
};
export const updateInvestiment = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const { name, amount } = req.body;
        const update = await InvestimentsModel.updateInvestment(Number(id), name, amount);
        res.status(200).json(update);
    }
    catch (error) {
        next(error);
        res.status(500).json({ message: 'erro ao atualizar investimentos' });
    }
};
export const deleteInvestiment = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const delet = await InvestimentsModel.deleteInvestment(Number(id));
        res.status(200).json(delet);
    }
    catch (error) {
        next(error);
        res.status(500).json({ message: 'erro ao deletar investimento' });
    }
};
