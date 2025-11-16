import express from "express"
import mongoose from "mongoose"
import { Servicos } from "./models/servicos"
import { Clientes } from "./models/clientes"

const app = express()
app.use(express.json())

app.use("/servicos", servicosRouter)

app.get("/users/:id/:page", (req, res) =>{
    const {id} = req.params
    res.end(`Buscar de usuários com id ${id}`)
})

mongoose.connect("mongodb://localhost:27017/trabalho")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})