import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types

const mascotasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    race_id: {
        type: ObjectId,
        ref: 'Races',
        required: true
    },
    categoria_id: {
        type: ObjectId,
        ref: 'Categoria',
        required: true
    },
    genero_id: {
        type: ObjectId,
        ref: 'Genero',
        required: true
    },
    foto: {
        type: String,
        required: true
    }
})

export default mascotasSchema