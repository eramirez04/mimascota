import mongoose from "mongoose";


const categoriaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
})


export default categoriaSchema