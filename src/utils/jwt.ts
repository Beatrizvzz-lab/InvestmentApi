//jwt serve para validar os usúarios que realizam o login na plataforma 

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
    throw new Error('JWT_SECRET não está definido no arquivo .env');
  }
export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {// esse verifyToken é da propria biblioteca do jwt 
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};
