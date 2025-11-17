import { Router } from "express";
import mesinhas from "../controllers/mesas.js";
const mesasRouter = Router()

mesasRouter.get("/", mesinhas.buscarMesa)
mesasRouter.post("/", mesinhas.criarMesa)
mesasRouter.delete("/:id", mesinhas.deletarMesa)
mesasRouter.put("/:id", mesinhas.atualizarMesa)
mesasRouter.get("/:id", mesinhas.buscarMesaPorId)

export {mesasRouter}
