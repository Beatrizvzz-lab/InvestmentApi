import { Router} from 'express';
import { createInvestiment, deleteInvestiment, getDashboardData, getInvestiments, updateInvestiment } from '../../../services/investimentControllers.js';
import { investmentValidation, idValidation } from "../../../middleware/validation.js";
import { authMiddleware } from '../../../middleware/authMiddleware.js';
const route = Router();

route.get('/', authMiddleware ,getInvestiments) 

route.post('/',authMiddleware ,investmentValidation, createInvestiment)

route.put('/:id', authMiddleware,idValidation ,investmentValidation, updateInvestiment)
    
route.delete('/:id', authMiddleware,idValidation, deleteInvestiment)

route.get('/dashboard', authMiddleware ,getDashboardData);

export default route;
