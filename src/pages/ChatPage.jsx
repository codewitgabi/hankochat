import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";


function ChatPage({ user, setUser, session }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <>
      <TopNavBar
        user={ user }
        session={ session }
        setUser={ setUser }
      />
      <BottomNav setUser={ setUser } />
    </>
  );
}


export default ChatPage;
