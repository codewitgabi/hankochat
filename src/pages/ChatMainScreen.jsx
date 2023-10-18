import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { socket } from "../socket";


function ChatMainScreen({ user, receiver, setReceiver }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  useEffect(() => {
    const recId = window.location.pathname?.split("/")[1]
    setReceiver(recId);
  }, [receiver])

  return (
    <MessageBox receiverID={ receiver }  />
  );
}


export default ChatMainScreen;
