import { Router } from "express"
import comandinhas from "../controllers/comandas.js"
const comandaRouter = Router()

comandaRouter.get("/", comandinhas.buscarComanda)
comandaRouter.post("/", comandinhas.criarComanda)
comandaRouter.delete("/:id", comandinhas.deletarComanda)
comandaRouter.put("/:id", comandinhas.atualizarComanda)
comandaRouter.get("/:id", comandinhas.buscarComandaPorId)

export {comandaRouter}