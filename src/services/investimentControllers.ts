
import { Investimento } from '@prisma/client';
import InvestimentsModel from '../controllers/models/investimentModel.js';

import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const getInvestiments = async (req:Request, res: Response, next: NextFunction):Promise<void> =>{
try{
    // Chamando o método 'getAllInvestments' - que vem do model, que retorna todos os investimentos do banco
    const investiments = await InvestimentsModel.getAllInvestiments(); // usa o await pois colocamos uma funcao assincrona
    res.status(200).json(investiments);
    return
}catch (error){
    next(error);
}
};
// Função para criar um novo investimento (POST /investments)

export const createInvestiment = async (req:Request, res:Response, next:NextFunction):Promise<void> =>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return
  }
    try{
        const {name, amount,interestRate, investmentPeriod} = req.body // pega os dados do corpo da requisicao, nome e o valor do investimento
        const create = await InvestimentsModel.createInvestment(name, amount, interestRate, investmentPeriod); //passa os parametros dentro da duncao de criar
       res.status(200).json(create);
       return
    }catch(error){
      next(error); 
    }
}
export const updateInvestiment = async (req:Request, res: Response, next: NextFunction):Promise<void>  =>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return
  }
    try{
        const {id} = req.params;
        const {name, amount, interestRate ,investmentPeriod} = req.body;
        const update = await InvestimentsModel.updateInvestment(Number(id), name, amount, interestRate, investmentPeriod);
        res.status(200).json(update);
        return
    }catch (error){
       next(error); 
    }
}
export const deleteInvestiment = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
     return
  }
    try{
        const {id} = req.params;
        const delet = await InvestimentsModel.deleteInvestment(Number(id))
        res.status(200).json(delet)
        return
    }catch(error){
        next(error); 
    }
} 