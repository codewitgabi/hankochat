import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import ChatBox from "../components/ChatBox";
import NavBar from "../components/NavBar";
import { socket } from "../socket";


function ChatMainScreen({ user, receiver, setReceiver }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!user) {
      socket?.disconnect();
      navigate("/");
    }
  });

  useEffect(() => {
    const recId = window.location.pathname?.split("/")[2]
    setReceiver(recId);
  }, [receiver])

  /*
  useEffect(() => {
    socket?.emit("init_messages", socket?.id, receiver)
  })
  */

  useEffect(() => {
    socket?.on("new_message", (message) => {
      console.log(message)
      setMessages(message);
    })
  });

  return (
    <>
      <NavBar user={ user } />
      {
        messages &&
        messages.map((message, idx) => {
          return <ChatBox key={ message._id } message={ message.text } />
        })
      }
      <MessageBox receiverID={ receiver } setMessages={ setMessages } />
    </>
  );
}


export default ChatMainScreen;
