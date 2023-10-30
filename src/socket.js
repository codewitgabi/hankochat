import { io } from "socket.io-client";


const SERVER_URL = import.meta.env.VITE_SERVER_URL;


const SOCKET_URL = import.meta.env.NODE_ENV = "production" ? SERVER_URL : "http://localhost:3000";
const user = getUser();
export let socket;
console.log("U", user?.jwt?.slice(0, 5))
const jwtHasExpired = (new Date(user?.expiryTime))?.valueOf() <= (new Date()).valueOf();


console.log((new Date(user?.expiryTime))?.valueOf())
console.log(jwtHasExpired)

if (!jwtHasExpired || user?.jwt === undefined) {
  socket = io(SOCKET_URL, {
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


  socket.on("connect_error", (e) => console.log(e.message + "\nReload the page"))
}


function getUser() {
  return JSON.parse(localStorage.getItem("hankochat_user"));
}
