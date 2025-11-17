import { Funcionarios } from "../models/funcionarios.js";
class FuncionarioControllers{
    buscarFuncionario = async (req, res) =>{
        const response = await Funcionarios.find()
        res.json(response)
    }

    criarfuncionario = (req, res) => {
        const {nome, idade, cargo} = req.body
        if (!nome || !idade || !cargo){
            return res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
        }
        const funcionario = new Funcionarios({nome, idade, cargo})
        funcionario.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Criado com sucesso"
            })
        ).catch(
            err => {
                return res.status(422).json({
                    erro: true,
                    message: "Dados inválidos"
                })
            }
        )
    }

    atualizarFuncionario = async (req, res) =>{
        const {id} = req.params
        const {nome, idade, cargo} = req.body
        const response = await Funcionarios.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração feita"
            })
        }else{
            res.json({
                erro: false,
                message: "Alteração não foi feita"
            })
        }
    }

    deletarFuncionario = async (req, res) =>{
        const {id} = req.params
        const {nome, idade, cargo} = req.body
        const response = await Funcionarios.findByIdAndDelete(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Apagado"
            })
        }else{
            res.json({
                erro: false,
                message: "Não apago"
            })
        }
    }
    buscarFuncionarioPorId = async (req, res) =>{
        const {id} = req.params
        const response = await Funcionarios.findById(id)
        res.json(response)
    }    
}

export default new FuncionarioControllers()