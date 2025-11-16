import { model,Schema } from "mongoose";

const mesasSchema = new Schema({
    numero: {type: Number, required: true}
})

const mesas = model('Pratos', mesasSchemaSchema)
export {mesas}