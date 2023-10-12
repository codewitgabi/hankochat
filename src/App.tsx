import {
  useState,
  useReducer,
  useEffect,
  useMemo
} from "react";
import { Routes, Route } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import axios from "axios";
import { User } from "./types/Props";
import reducer, { initState } from "./reducer";

// pages

import LandingPage from "./pages/LandingPage";
import Error404Page from "./pages/404Error";
import AuthPage from "./pages/HankoAuth";
import CompleteProfile from "./pages/CompleteProfile";
import ChatPage from "./pages/ChatPage";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;


const getUser = async (session, setUser) => {
  try {
    const res = await axios.get(`http://localhost:3000/auth/getUser/${session.userID}`)
    setUser({ ...res.data, id: session.userID })
  } catch (e) {
    console.log(e)
  }
}

function App() {
  const hanko = useMemo(() => new Hanko(hankoApi));
  const session = hanko.session.get();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (hanko.session.isValid()) {
      getUser(session, setUser)
    }
  }, [user]);

  return (
    <Routes>
      <Route
        path="/"
        element={ <LandingPage user={ user } session={ session } setUser={ setUser } /> }
      />
      <Route
        path="/auth"
        element={ <AuthPage user={ user } setUser={ setUser } session={ session } /> }
      />
      <Route
        path="/complete-profile"
        element={ <CompleteProfile user={ user } /> }
      />
      <Route
        path="/chat"
        element={ <ChatPage user={ user } setUser={ setUser } session={ session } /> }
      />
      <Route
        path="*"
        element={ <Error404Page /> }
      />
    </Routes>
  );
}


export default App;
