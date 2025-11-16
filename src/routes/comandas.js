import { Router } from "express"
import { buscarComanda, criarComanda, deletarComanda, atualizarComanda } from "../controllers/comandas.js"
const comandaRouter = Router()

comandaRouter.get("/", buscarComanda)
comandaRouter.post("/", criarComanda)
comandaRouter.delete("/:id", deletarComanda)
comandaRouter.put("/:id", atualizarComanda)

export {comandaRouter}