import { pratos } from "../models/pratos.js"

class PratoController{
    buscarPratos = async (req, res) =>{
        const response = await pratos.find()
        res.json(response)
    }
    addPratos = (req, res) =>{
        const {nome, preco} = req.body
        if (!nome, !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos" 
            })
            return
        }
        const prato = new pratos({
            nome, preco
        })
        prato.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Prato criado com sucesso",
                prato: prato
            })).catch(err =>{
            res.status(422).json({
                erro: true,
                message: "Dados inválidos" 
            })        
        })
    }
    buscarPratosPorId = async (req, res) =>{
        const {id} = req.params
        const response = await pratos.findById(id)
        res.json(response)
    }
    atualizarPrato = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await pratos.findByIdAndUpdate(id, req.body)
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
    deletarPrato = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await pratos.findByIdAndDelete(id, req.body)
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
}
export default new PratoController()