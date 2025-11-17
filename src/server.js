import express from "express"
import mongoose from "mongoose"
import { pratosRouter } from "./routes/pratos.js"
import { mesasRouter } from "./routes/mesas.js"
import { comandaRouter } from "./routes/comandas.js"
import { funcionarioRouter } from "./routes/funcionarios.js"
import { sucosRouter } from "./routes/sucos.js"
const app = express()
app.use(express.json())

app.use("/comandas", comandaRouter)

app.use("/mesas", mesasRouter)

app.use("/pratos", pratosRouter)

app.use("/funcionarios", funcionarioRouter)

app.use("/sucos", sucosRouter)

mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("rodou parça")
})