import { io } from "socket.io-client";
import { SERVER_URL } from "./utils.js";


const SOCKET_URL = import.meta.env.NODE_ENV = "production" ? SERVER_URL : "http://localhost:3000";
const user = getUser();

console.log("U", user?.jwt?.slice(0, 5))

export const socket = io(SOCKET_URL, {
  auth: {
    token: `Bearer ${user?.jwt}`,
    user: {
      id: user?.id,
      username: user?.username
    }
  }
});


socket.on("connect", () => {
  socket.id = user?.id; // user must already be logged in to avoid errors
  console.log(socket);
})


socket.on("connect_error", (e) => alert(e.message + "\nReload the page"))


function getUser() {
  return JSON.parse(localStorage.getItem("hankochat_user"));
}
