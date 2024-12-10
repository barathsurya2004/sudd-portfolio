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
import { useContext, useEffect } from "react";
import { Context } from "./contexts";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const { currentColor, setCurrentView, currentView, ratio } =
    useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="App"
      style={{
        backgroundColor: currentColor.sec,
      }}
    >
      {window.innerWidth > 1400 && <Navbar />}
      <Loading />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* hi */}
    </div>
  );
};

export default App;
