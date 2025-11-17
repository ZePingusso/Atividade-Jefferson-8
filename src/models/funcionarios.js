import { model,Schema } from "mongoose";

const funcionariosSchema = new Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    cargo: {type: String, required: true}
})

const Funcionarios = model('Funcionarios', funcionariosSchema)
export {Funcionarios}