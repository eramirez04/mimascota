import mongoose from "mongoose";


const genderSchemas = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
})

export default genderSchemas