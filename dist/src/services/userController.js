import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js'; // Verifique o caminho
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); //instancia que interage com o banco de dados 
export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body; // extrai essas info da requisicao 
        const existingUser = await prisma.user.findUnique({ where: { email } }); // verifica se o email do usuario existe no banco 
        if (existingUser) {
            res.status(400).json({ message: "Email já cadastrado" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10); // Criptografa a senha usando bcrypt com salt de 10.
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });
        const token = generateToken(user.id);
        res.status(201).json({ message: "Usuário cadastrado com sucesso", token });
    }
    catch (error) {
        next(error);
    }
};
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(400).json({ message: "Usuário ou senha inválidos" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password); // Compara a senha fornecida com a senha criptografada no banco de dados.
        if (!isPasswordValid) {
            res.status(400).json({ message: "Usuário ou senha inválidos" });
            return;
        }
        const token = generateToken(user.id);
        res.status(200).json({ message: "Login realizado com sucesso", token });
    }
    catch (error) {
        next(error);
    }
};
