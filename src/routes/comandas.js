import { Router } from "express"
import { buscarComanda, criarComanda, deletarComanda } from "../controllers/comandas.js"
const comandaRouter = Router()

comandaRouter.get("/", buscarComanda)
comandaRouter.post("/", criarComanda)
comandaRouter.delete("/:id", deletarComanda)

export {comandaRouter}