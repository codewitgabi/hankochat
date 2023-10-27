import Message from "../models/message.js";


export const createMessage = async (senderId, receiverId, msg) => {
  try {
    await Message.create({ senderId, receiverId, text: msg })

    return 0;
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}


export const getMessages = async (senderId, receiverId) => {
  try {
    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ createdAt: 1 })

    console.log("Messages", messages)
    return messages
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
