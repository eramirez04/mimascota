import mongoose from "mongoose";

const racesSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
});

export default racesSchemas;
