import express from 'express';
import { loginUser, registerUser } from "../../../services/userController.js";
const routuser = express.Router();
routuser.post('/register', registerUser);
routuser.post('/login', loginUser);
routuser.put('/:id');
routuser.delete('/:id');
export default routuser;
