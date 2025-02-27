import express from "express";
import cors from "cors";
import route from './controllers/models/routes/route.js';
import routuser from './controllers/models/routes/userRoute.js';
const Port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', route);
app.use('/users', routuser);
app.listen(Port, () => {
    console.log('servidor rodando!');
});
