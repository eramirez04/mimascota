import mongoose from "mongoose";
import categoriaSchema from "../schemas/categoriasSchemas.js";


const categoriasModel = mongoose.model('Categoria', categoriaSchema)

export default categoriasModel