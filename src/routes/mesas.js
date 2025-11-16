import { Router } from "express";
import { buscarMesa, criarMesa, deletarMesa, atualizarMesa } from "../controllers/mesas.js";
const mesasRouter = Router()

mesasRouter.get("/", buscarMesa)
mesasRouter.post("/", criarMesa)
mesasRouter.delete("/:id", deletarMesa)
mesasRouter.put("/:id", atualizarMesa)

export {mesasRouter}
