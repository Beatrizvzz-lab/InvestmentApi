import { Router } from "express";
import { loginUser, registerUser } from "../../../services/userController.js";
const routuser = Router();
routuser.get('/');
routuser.post('/register', registerUser);
routuser.post('/login', loginUser);
routuser.put('/:id');
routuser.delete('/:id');
export default routuser;
