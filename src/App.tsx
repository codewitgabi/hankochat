import { Routes, Route } from "react-router-dom";

// pages

import LandingPage from "./pages/LandingPage";
import Error404Page from "./pages/404Error";
import AuthPage from "./pages/HankoAuth";
import CompleteProfile from "./pages/CompleteProfile";
import ChatPage from "./pages/ChatPage";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <LandingPage /> }
      />
      <Route
        path="/auth"
        element={ <AuthPage /> }
      />
      <Route
        path="/complete-profile"
        element={ <CompleteProfile /> }
      />
      <Route
        path="/chat"
        element={ <ChatPage /> }
      />
      <Route
        path="*"
        element={ <Error404Page /> }
      />
    </Routes>
  );
}


export default App;
