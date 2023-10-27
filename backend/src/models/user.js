import { Schema, model, ObjectId } from "mongoose";
import validator from "validator";

const { isEmail, isURL } = validator;


const UserSchema = new Schema({
  _id: {
    type: Schema.Types.UUID,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    maxLength: 20,
    required: true
  },
  email: {
    type: String,
    trim: true,
    maxLength: 120,
    required: true,
    unique: true,
    validate: [isEmail, "Please provide a valid email"]
  },
  image: {
    type: String,
    trim: true,
    maxLength: 1024,
    validate: [isURL, "Please provide a valid url"],
    default: "https://tinyurl.com/4e5pakch"
  },
  isActive: {
    type: Boolean,
    default: true
  }
})


export default model("User", UserSchema);
