import { Router } from "express";
import suquinhos from "../controllers/sucos.js";
const sucosRouter = Router()

sucosRouter.get("/", suquinhos.buscarSucos)
sucosRouter.post("/", suquinhos.addSuco)
sucosRouter.get("/:id", suquinhos.buscarSucosPorId)
sucosRouter.put("/:id", suquinhos.atualizarSuco)
sucosRouter.delete("/:id", suquinhos.deletarSuco)

export {sucosRouter}