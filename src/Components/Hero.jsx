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
    const tl = gsap.timeline();
    tl.to(".cursor", {
      opacity: 0,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });
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
            duration: 1, // Time to pause for reading
          })
          .set(".cursor", {
            text: {
              value: "",
            },
          })
          .to(".hero-text", {
            backgroundSize: "100% 100%",
            duration: 1,
          })
          .set(".hero-text", {
            delay: 0.2,
            text: {
              value: "",
            },
          })
          .set(".cursor", {
            text: {
              value: "|",
            },
          })
          .set(".hero-text", {
            backgroundSize: "0% 100%",
          })
          .set(".hero-text", {
            backgroundColor: "transparent",
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
        <br />
        <span
          className="hero-text"
          style={{
            // display: "block",
            // mixBlendMode: "difference",
            backgroundImage: "linear-gradient(to right, #495f8c, #495f8c )",
            backgroundBlendMode: "color-burn",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          {/* Sudhesh Venkatachalam */}
        </span>
        <span className="cursor">|</span>
      </span>
    </div>
  );
};

export default Hero;
