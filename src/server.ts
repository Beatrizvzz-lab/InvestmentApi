import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import route from './controllers/models/routes/route.js'
import routuser from './controllers/models/routes/userRoute.js'

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
