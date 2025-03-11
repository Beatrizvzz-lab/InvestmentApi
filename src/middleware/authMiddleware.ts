//este arquivo serve para proteger suas rotas, 
// garantindo que apenas usuários autenticados possam acessá-las. 
// Ele verifica se a requisição possui um token JWT válido antes de permitir que a execução continue.

import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt"; 


export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token =  req.headers.authorization?.split(' ')[1];

  console.log("Token recebido:", token); // <-- Adicione isso para depurar

  if (!token) {
    res.status(401).json({ message: "Acesso negado. Nenhum token fornecido." });
    return;
  }

  try {
    const decoded = verifyToken(token.replace("Bearer ", "")) as { userId: number };; // Remove "Bearer " e verifica o token
    if (!decoded) {
      res.status(401).json({ message: "Token inválido ou expirado." });
      return;
    }

    (req as Request).userId = decoded.userId; // Corrigido

    console.log("userId extraído do token:", decoded.userId); // Debug
    next(); // Continua para a próxima função
  } catch (error) {
    res.status(401).json({ message: "Erro ao validar token." });
  }
};
