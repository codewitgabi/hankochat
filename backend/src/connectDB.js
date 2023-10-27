import mongoose from "mongoose";
import { config } from "dotenv";
config();


const spawnDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};


export default spawnDB;
