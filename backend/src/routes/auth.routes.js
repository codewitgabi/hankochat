import { Router } from "express";
import { createUser, isUser, getUser, getUsers } from "../controllers/auth.controller.js";
import { uploadFile } from "../storage.js";
const router = Router();


router.post("/create-user", createUser)
router.get("/isUser/:userID", isUser);
router.get("/getUser/:userID", getUser);
router.get("/getUsers", getUsers);


export default router;
