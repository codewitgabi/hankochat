import NavBar from "../components/NavBar";
import Service from "../components/Service";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


function LandingPage({ user }) {
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
