import { body, param } from 'express-validator';
export const investmentValidation = [
    body('name').isString().withMessage('O nome é obrigatório e deve ser uma string'),
    body('amount').isNumeric().withMessage('O valor do investimento deve ser um número'),
];
export const idValidation = [
    param('id').isInt().withMessage('ID inválido'),
];
