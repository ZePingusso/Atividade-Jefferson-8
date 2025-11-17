import { Suco } from "../models/sucos.js"

class SucoController{
    buscarSucos = async (req, res) =>{
        const response = await Suco.find()
        res.json(response)
    }
    addSuco = (req, res) =>{
        const {sabor, preco} = req.body
        if (!sabor || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos" 
            })
            return
        }
        const suco = new Suco({
            sabor, preco
        })
        suco.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Suco criado com sucesso",
                suco : suco
            })).catch(err =>{
            res.status(422).json({
                erro: true,
                message: "Dados inválidos" 
            })        
        })
    }
    buscarSucosPorId = async (req, res) =>{
        const {id} = req.params
        const response = await Suco.findById(id)
        res.json(response)
    }
    atualizarSuco = async (req, res) =>{
        const {id} = req.params
        const {sabor, preco} = req.body
        const response = await Suco.findByIdAndUpdate(id, req.body)
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
    deletarSuco = async (req, res) =>{
        const {id} = req.params
        const {sabor, preco} = req.body
        const response = await Suco.findByIdAndDelete(id, req.body)
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
export default new SucoController()