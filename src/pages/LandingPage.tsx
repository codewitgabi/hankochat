import NavBar from "../components/NavBar";
import Service from "../components/Service";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { AuthProps } from "../types/Props";


function LandingPage({ user, setUser, session }: AuthProps) {
  return (
    <>
      <NavBar user={ user } />
      <Service />
      <FAQ />
      <Footer />
    </>
  );
}


export default LandingPage;
