import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js'; // Verifique o caminho
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); //instancia que interage com o banco de dados 
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // extrai essas info da requisicao 
        const existingUser = await prisma.user.findUnique({ where: { email } }); // verifica se o email do usuario existe no banco 
        if (existingUser) {
            return res.status(400).json({ message: "Email já cadastrado" });
        }
        const hashedPassword = await bcrypt.hash(password, 10); // Criptografa a senha usando bcrypt com salt de 10.
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });
        const token = generateToken(user.id);
        return res.status(201).json({ message: "Usuário cadastrado com sucesso", token });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Usuário ou senha inválidos" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password); // Compara a senha fornecida com a senha criptografada no banco de dados.
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Usuário ou senha inválidos" });
        }
        const token = generateToken(user.id);
        return res.status(200).json({ message: "Login realizado com sucesso", token });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao fazer login" });
    }
};
