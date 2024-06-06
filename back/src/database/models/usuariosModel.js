import mongoose from "mongoose";
import usuarioSchema from "../schemas/usuarioSchemas.js";

const usuarioModel = mongoose.model("Usuario", usuarioSchema);

export default usuarioModel;
