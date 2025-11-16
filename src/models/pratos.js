import { model,Schema } from "mongoose";

const pratosSchema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const pratos = model('Pratos', pratosSchema)
export {pratos}