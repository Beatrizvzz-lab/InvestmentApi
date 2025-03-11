import { Request } from 'express';

declare module 'express' {
    interface Request {
        userId?: number; // Adiciona a propriedade userId ao tipo Request
    }
}