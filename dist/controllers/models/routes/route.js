import { Router } from 'express';
import { createInvestiment, deleteInvestiment, getInvestiments, updateInvestiment } from '../../../services/investimentControllers.js';
import { investmentValidation, idValidation } from "../../../middleware/validation.js";
const route = Router();
route.get('/', getInvestiments);
route.post('/', investmentValidation, createInvestiment);
route.put('/:id', idValidation, investmentValidation, updateInvestiment);
route.delete('/:id', idValidation, deleteInvestiment);
export default route;
