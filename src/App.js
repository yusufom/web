import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
// import AllinOne from "./components/AllinOne";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    < >
      <Navbar />
      <Hero/>
      <About />
      <Support />
      {/* <AllinOne/> */}
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
