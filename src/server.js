import express from "express"
import { Database } from "../databases.js"
import mongoose from "mongoose"
const app = express()
app.use(express.json())

const database = new Database

app.get('/', (req, res) => {
    res.send("Voce esta na pagina inicial")
})

app.get('/user', (req, res) => {
    const data = database.select("usuario")
    res.json(data)
})

app.post('/user', (req, res) => {
    const {nome, idade, email} = req.body
    if (nome, idade, email){
        database.insert("usuario", {nome, idade, email})
        return res.status(201).send("Usuário criado")
    }
    return res.status(400).send("Informações inválidas")
})

mongoose.connect("mongodb://localhost:27017/")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("rodou parça")
})