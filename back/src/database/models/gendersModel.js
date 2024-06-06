import mongoose from "mongoose";

import genderSchemas from "../schemas/gendersSchema.js";

const gendersModel = mongoose.model("Genero", genderSchemas);

export default gendersModel;
