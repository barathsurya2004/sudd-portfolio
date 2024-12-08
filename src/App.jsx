import Loading from "./Components/Loading";
import ThreeJsCanvas from "./Components/ThreeJsCanvas";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useGSAP } from "@gsap/react";
const App = () => {
  return (
    <>
      <Navbar />
      <Loading />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* hi */}
    </>
  );
};

export default App;
