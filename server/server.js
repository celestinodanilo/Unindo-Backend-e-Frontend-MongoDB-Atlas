const express = require("express");
const cors = require("cors");
//importa o middleware

require("dotenv").config();
//lê o .env e disponibiliza as variaveis guardadas

const PORT = process.env.PORT;
//Acessa o valor da variável PORT definida no .env

const app = express();
const connectDB = require("./db");


app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(process.env.cachorro);
});

