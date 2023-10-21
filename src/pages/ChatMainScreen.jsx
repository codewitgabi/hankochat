import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import NavBar from "../components/NavBar";
import { socket } from "../socket";


function ChatMainScreen({ user, receiver, setReceiver }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      socket?.disconnect();
      navigate("/");
    }
  });

  useEffect(() => {
    const recId = window.location.pathname?.split("/")[1]
    setReceiver(recId);
  }, [receiver])

  return (
    <>
      <NavBar user={ user } />
      <MessageBox receiverID={ receiver }  />
    </>
  );
}


export default ChatMainScreen;
