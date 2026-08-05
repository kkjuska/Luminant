import express from "express"
import userouter from "../routes/userRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userouter)

app.listen(PORT, () =>{
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`)})