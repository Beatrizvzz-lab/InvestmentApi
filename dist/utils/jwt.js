import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET || 'seu_segredo_super_secreto';
export const generateToken = (userId) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    }
    catch (error) {
        return null;
    }
};
