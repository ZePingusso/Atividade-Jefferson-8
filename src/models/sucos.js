import {model, Schema} from "mongoose";

const sucoSchema = new Schema({
    sabor: {type: String, required: true},
    preco: {type: Number, required: true},
})

const Suco = model('Sucos', sucoSchema)

export {Suco}