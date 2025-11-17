import { Router } from "express"
import funcionarinho from "../controllers/funcionarios.js"
const funcionarioRouter = Router()

funcionarioRouter.get("/", funcionarinho.buscarFuncionario)
funcionarioRouter.post("/", funcionarinho.criarfuncionario)
funcionarioRouter.delete("/:id", funcionarinho.deletarFuncionario)
funcionarioRouter.put("/:id", funcionarinho.atualizarFuncionario)
funcionarioRouter.get("/:id", funcionarinho.buscarFuncionarioPorId)

export {funcionarioRouter}