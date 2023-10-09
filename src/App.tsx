import { Routes, Route } from "react-router-dom";

// pages

import LandingPage from "./pages/LandingPage";
import Error404Page from "./pages/404Error";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <LandingPage /> }
      />
      <Route
        path="*"
        element={ <Error404Page /> }
      />
    </Routes>
  );
}


export default App;
