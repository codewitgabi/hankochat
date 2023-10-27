import { Schema, model } from "mongoose";


const MessageSchema = new Schema({
  senderId: {
    type: Schema.Types.UUID,
    ref: "User",
    required: true
  },
  receiverId: {
    type: Schema.Types.UUID,
    ref: "User",
    required: true
  },
  text: {
    type: String,
    minLength: 1
  }
}, { timestamps: true })


export default model("Message", MessageSchema);
