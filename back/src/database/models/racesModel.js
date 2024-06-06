import mongoose from "mongoose";
import racesSchemas from "../schemas/racesSchemas.js";

const racesModel = mongoose.model("Races", racesSchemas);

export default racesModel;
