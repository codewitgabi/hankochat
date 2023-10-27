import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import multer from "multer";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const storage = multer.diskStorage({
  destination: "../profile_pictures/",
  filename: (req, file, cb) => {
    cb(null, file.originalName)
  }
})


export const uploadFile = multer({
  storage: storage
}).single("image")


export default cloudinary;

