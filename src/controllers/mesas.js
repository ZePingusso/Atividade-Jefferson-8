import { mesas } from "../models/mesas.js";

const buscarMesa = async (req, res) =>{
    const response = await mesas.find()
    res.json(response)
}

const criarMesa = (req, res) =>{
    const {numero} = req.body
    if (!numero){
        res.status(422).json({
            erro: true,
            message: "Dados inválidos" 
        })
        return
    }
    const mesa = new mesas({
        numero
    })
    mesa.save().then(
        () => res.status(201).json({
            erro: false,
            message: "Mesa criada com sucesso",
            mesa: mesa
        })).catch(err =>{
        res.status(422).json({
            erro: true,
            message: "Dados inválidos" 
        })        
    })
}

const deletarMesa = async (req, res) =>{
    const {id} = req.params
    const {numero} = req.body
    const response = await mesas.findByIdAndDelete(id, req.body)
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
export {buscarMesa, criarMesa, deletarMesa}