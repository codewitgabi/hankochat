import express from "express";
import cors from "cors";
import logger from "morgan";
import { config } from "dotenv";
import { createServer } from "http";
import { log, error } from "console";
import { Server } from "socket.io";
import spawnDB from "./connectDB.js";
import authRouter from "./routes/auth.routes.js";
import { verifyAuth } from "./middlewares.js";
import { createMessage, getMessages } from "./controllers/message.controller.js";


// middlewares

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.set("port", PORT);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/chat", verifyAuth)


// create server

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:8158",
      "https://hankochat.vercel.app"
    ],
    credentials: false,
    maxHttpBufferSize: 1e8
  }
});


// routers

app.use("/auth", authRouter);


// error middlewares

app.use("*", (err, req, res, next) => {
  res.status(404).json({ error: err.message });
});


// socket middlewares

io.use((socket, next) => {
  const authHeader = socket.handshake?.auth;

  if (authHeader) {
    verifyAuth(authHeader, socket, next);
  } else {
    next(new Error("Could not parse auth token"))
  }
})


io.on("connection", (socket) => {
  console.log(socket.id)

  // initialize messages

  /*
  socket.on("init_messages", (senderID, receiverID) => {
    getMessages(senderID, receiverID)
    .then((messages) => {
      socket.to(receiverID).emit("new_message", messages)
    })
    .catch(e => log(e.message))
  })
  */

  // Send message to user

  socket.on("send_message", (senderID, receiverID, msg) => {
    createMessage(senderID, receiverID, msg)
    .then((done) => {
      getMessages(senderID, receiverID)
      .then((messages) => {
        console.log(messages)
        socket.to(receiverID).emit("new_message", messages)
      })
      .catch(e => log(e.message))
    })
    .catch((e) => log(e.message))
  })

  // Clear message if seen by receiver

  socket.on("seen_message", (receiverSocketID, receiverDbID) => {
    log("Message cleared");
  })
})

// start server

const startApp = async () => {
  await spawnDB()
  .then(() => {
    server.listen(app.get("port"), () => {
      log(`Server listening on http://localhost:${app.get("port")}`);
    })
  })
  .catch(err => {
    error(err.message);
    //server.listen(app.get("port"))
  })
};


startApp();
