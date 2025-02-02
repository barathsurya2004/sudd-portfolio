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
  const { currentColor, setCurrentView, loading, secondMargin } =
    useContext(Context);
  const texts = [
    "Sudhesh Venkatachalam.",
    "a Graphic Designer.",
    "a Motion Designer.",
    "a Visual Designer.",
    "a Type Designer.",
    "a Synergy Designer.",
  ];
  useEffect(() => {
    gsap.set(".hero", { y: "100dvh" });
  }, []);
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
      gsap.to(".hero", {
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
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
            duration: index == 0 ? 2.7 : 1, // Time to pause for reading
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
      id="hero"
      style={{
        fontFamily: "neue-haas-grotesk-display",
        fontWeight: 900,
        height: "100dvh",
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // paddingTop: (328 * window.innerHeight) / 1080,
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        position: "relative",
      }}
    >
      <span
        className="hero-text-container"
        style={{
          color: currentColor.prim,
          fontFamily: "neue-haas-grotesk-text",
          fontWeight: 700,
          position: "absolute",
          // bottom: "50%",
          // top: "50%",
          // transform: "translateY(-50%)",
        }}
      >
        Hello! <span className="iam">I am </span>
        <span
          className="hero-text"
          style={{
            // display: "block",
            // mixBlendMode: "difference",
            backgroundImage: `linear-gradient(to right, ${currentColor.prim}, ${currentColor.prim} )`,
            backgroundBlendMode: "color-burn",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          {/* Sudhesh Venkatachalam */}
        </span>
        <span
          className="cursor"
          style={{
            fontWeight: 500,
          }}
        >
          |
        </span>
      </span>
    </div>
  );
};

export default Hero;
