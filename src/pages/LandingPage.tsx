import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Service from "../components/Service";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { AuthProps } from "../types/Props";


function LandingPage({ user, setUser, session }: AuthProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [navigate])

  return (
    <>
      <NavBar user={ user } session={ session } setUser={ setUser } />
      <Service />
      <FAQ />
      <Footer />
    </>
  );
}


export default LandingPage;
