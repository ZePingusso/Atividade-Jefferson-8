import { Router } from "express";
import pratinhos from "../controllers/pratos.js";
const pratosRouter = Router()

pratosRouter.get("/", pratinhos.buscarPratos)
pratosRouter.post("/", pratinhos.addPratos)
pratosRouter.get("/:id", pratinhos.buscarPratosPorId)
pratosRouter.put("/:id", pratinhos.atualizarPrato)
pratosRouter.delete("/:id", pratinhos.deletarPrato)

export {pratosRouter}