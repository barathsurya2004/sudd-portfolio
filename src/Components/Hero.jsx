import Lottie from "lottie-react";
import animationData from "../assets/json/airport_1.json";
import { useContext, useEffect } from "react";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import "./Hero.css";
gsap.registerPlugin(TextPlugin);
const Hero = () => {
  const { setCurrentView, loading, secondMargin } = useContext(Context);
  const texts = [
    "Sudhesh Venkatachalam",
    "a Graphic Designer",
    "a Motion Designer",
    "a Runner",
    "a Visual Designer",
    "a Type Designer",
    "a Typographer",
    "a Movie Buff",
  ];
  useGSAP(() => {
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom 2%",
        onEnter: () => {
          setCurrentView("Hero");
        },
        onEnterBack: () => {
          setCurrentView("Hero");
        },
      },
    });
  });
  useEffect(() => {
    if (!loading) {
      const mastertl = gsap.timeline({
        repeat: -1, // Loop infinitely
      });

      texts.forEach((text, index) => {
        const tl = gsap.timeline();

        // Type the word
        tl.to(".hero-text", {
          duration: 1, // Typing effect duration
          text: {
            value: text,
          },
        })
          .to(".hero-text", {
            duration: 0.7, // Time to pause for reading
          })
          .set(".hero-text", {
            text: {
              value: "",
            },
          });

        // Add the individual timeline to the master timeline
        mastertl.add(tl);
      });

      mastertl.play();
    }
  }, [loading]);
  return (
    <div
      className="hero"
      style={{
        fontFamily: "neue-haas-grotesk-display",
        fontSize: (100 * window.innerWidth) / 1920,
        fontWeight: 900,
        height: "100vh",
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        paddingTop: (328 * window.innerHeight) / 1080,
      }}
    >
      <span
        style={{
          width: "55%",
          color: "#495f8c",
          fontFamily: "neue-haas-grotesk-text",
          fontWeight: 700,
        }}
      >
        Hello! I&#8217;m
        <span
          className="hero-text"
          style={{
            display: "block",
          }}
        >
          {/* Sudhesh Venkatachalam */}
        </span>
      </span>
    </div>
  );
};

export default Hero;
