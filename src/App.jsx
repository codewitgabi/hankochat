import React, {
  useState,
  useEffect,
  useMemo
} from "react";
import { Routes, Route } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import axios from "axios";

// pages

import LandingPage from "./pages/LandingPage";
import Error404Page from "./pages/404Error";
import AuthPage from "./pages/HankoAuth";
import CompleteProfile from "./pages/CompleteProfile";
import ChatPage from "./pages/ChatPage";
import ChatMainScreen from "./pages/ChatMainScreen";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


const getUser = async (session, setUser) => {
  console.log(session)
  let exp = new Date();

  try {
    const res = await axios.get(`${SERVER_URL}/auth/getUser/${session.userID}`)
    setUser({ ...res.data, id: session.userID })
    exp.setSeconds(exp.getSeconds() + session?.expirationSeconds);
    localStorage.setItem("hankochat_user", JSON.stringify({ ...res.data, id: session.userID, jwt: session?.jwt, expiryTime: exp }))
  } catch (e) {
    console.log(e)
  }
}

function App() {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const session = hanko.session.get();
  const [user, setUser] = useState(null);
  const [receiver, setReceiver] = useState(null);
  //const [cusSession, setCusSession] = useState(null);

  useEffect(() => {
    if (hanko.session.isValid()) {
      getUser(session, setUser)
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={ <LandingPage user={ user } /> }
      />
      <Route
        path="/auth"
        element={ <AuthPage user={ user } setUser={ setUser } /> }
      />
      <Route
        path="/complete-profile"
        element={ <CompleteProfile user={ user } setUser={ setUser } session={ session } /> }
      />
      <Route
        path="/chat"
        element={ <ChatPage user={ user } setUser={ setUser } session={ session } /> }
      />
      <Route
        path="/chat/:userID"
        element={ <ChatMainScreen user={ user } receiver={ receiver } setReceiver={ setReceiver } /> }
      />
      <Route
        path="*"
        element={ <Error404Page /> }
      />
    </Routes>
  );
}


export default App;
