import { Comandas } from "../models/comanda.js";

const buscarComanda = async (req, res) =>{
    const response = await Comandas.find()
    res.json(response)
}

const criarComanda = (req, res) => {
    const {numero, mesa, prato} = req.body
    if (!numero, !mesa){
        return res.status(422).json({
            erro: true,
            message: "Dados inválidos"
        })
    }
    const comanda = new Comandas({numero, mesa, prato})
    comanda.save().then(
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

const atualizarComanda = async (req, res) =>{
    const {id} = req.params
    const {numero, preco, prato} = req.body
    const response = await Comandas.findByIdAndUpdate(id, req.body)
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

const deletarComanda = async (req, res) =>{
    const {id} = req.params
    const {numero, mesa, prato} = req.body
    const response = await Comandas.findByIdAndDelete(id, req.body)
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
export {buscarComanda, criarComanda, deletarComanda, atualizarComanda}