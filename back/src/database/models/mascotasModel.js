import mongoose from "mongoose";
import mascotasSchema from "../schemas/mascotasSchema.js";

const MascotaModel = mongoose.model('Mascota', mascotasSchema)

export default MascotaModel