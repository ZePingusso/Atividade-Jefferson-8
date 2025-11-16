import { Router } from "express";
import { buscarMesa, criarMesa, deletarMesa } from "../controllers/mesas.js";
const mesasRouter = Router()

mesasRouter.get("/", buscarMesa)
mesasRouter.post("/", criarMesa)
mesasRouter.delete("/:id", deletarMesa)

export {mesasRouter}
