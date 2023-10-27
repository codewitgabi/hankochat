import User from "../models/user.js";
import cloudinary from "../storage.js";


export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      _id: req.body._id,
      username: req.body.username,
      email: req.body.email,
    })

    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};


export const isUser = async (req, res) => {
  const userID = req.params.userID;
  try {
    const user = await User.findById(userID);

    if (user) {
      return res.status(200).json({ isUser: true })
    } else {
      return res.status(200).json({ isUser: false })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};


export const getUser = async (req, res) => {
  const userID = req.params.userID;

  try {
    const user = await User.findById(userID).select("username email image");
    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};


export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("_id username image")

    const usersList = users.map((user) => {
      console.log(user)
      return {
        id: String(user._id),
        username: user.username,
        email: user.email,
        image: user.image
      };
    })

    console.log(usersList)
    res.status(200).json(usersList)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
};
