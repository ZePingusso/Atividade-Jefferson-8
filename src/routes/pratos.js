import { Router } from "express";
import { addPratos, atualizarPrato, buscarPratos, buscarPratosPorId, deletarPrato } from "../controllers/pratos.js";
const pratosRouter = Router()

pratosRouter.get("/", buscarPratos)
pratosRouter.post("/", addPratos)
pratosRouter.get("/:id", buscarPratosPorId)
pratosRouter.put("/:id", atualizarPrato)
pratosRouter.delete("/:id", deletarPrato)

export {pratosRouter}