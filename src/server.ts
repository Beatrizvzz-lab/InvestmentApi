import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import route from './controllers/models/routes/route.js'
import routuser from './controllers/models/routes/userRoute.js'
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log(process.env.JWT_SECRET); // Verifica se a chave JWT_SECRET foi carregada

const Port = 3000
const app = express();
app.use(express.json());
app.use(cors())
app.use ('/api', route)
app.use('/users', routuser);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: "Erro inesperado" });
});


app.listen(Port, () =>{
    console.log('servidor rodando!')
})
