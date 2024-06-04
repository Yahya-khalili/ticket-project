import Contact from "./components/Home/Contact";
import Description from "./components/Home/Description";
import Events from "./components/Home/Events";
import Footer from "./components/Home/Footer";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";
import Reviews from "./components/Home/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Events />
      <Reviews />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
