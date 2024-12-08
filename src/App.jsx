import Loading from "./Components/Loading";
import ThreeJsCanvas from "./Components/ThreeJsCanvas";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useContext } from "react";
import { Context } from "./contexts";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const { setCurrentView, currentView, ratio } = useContext(Context);

  useGSAP(() => {});
  return (
    <>
      {window.innerWidth > 1400 && <Navbar />}
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
