import { useGSAP } from "@gsap/react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts";
import { url } from "../content";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);
// import { about } from "../content";

const About = () => {
  const { currentColor, setCurrentView, secondMargin, thirdMargin, ratio } =
    useContext(Context);
  const [about, setAbout] = useState(["", ""]);
  useEffect(() => {
    const afunc = async () => {
      const response = await axios.get(
        url + "get-all-texts/" + "675691b11ba213b1cf3577df"
      );
      setAbout([response.data.texts.text1, response.data.texts.text2]);
    };
    afunc();
  }, []);
  useGSAP(() => {
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about-container-all",
        start: "top top",
        end: "bottom top",
        // markers: true,
        onEnter: () => {
          setCurrentView("About");
        },
        onEnterBack: () => {
          setCurrentView("About");
        },
      },
    });
  });
  if (window.innerWidth <= 800) {
    //mobile view
    return (
      <div className="about-container-all">
        <div
          className="about-container"
          id="about"
          style={{
            // height: "100vh",
            width: "100%",
            position: "relative",
            color: currentColor.prim,
          }}
        >
          <div className="about">
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
                color: currentColor.prim,
              }}
            >
              Human
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
                color: currentColor.prim,
              }}
            >
              Purpose
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
                color: currentColor.prim,
              }}
            >
              Resonate
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
                color: currentColor.prim,
              }}
            >
              Magic
            </span>
          </div>
          <div
            className="about-text-container"
            style={{
              paddingRight: (235.75 * window.innerWidth) / 1920,
              // fontSize: (28 * window.innerWidth) / 1920,
              // color: "#495f8c",
            }}
          >
            <div
              className="about-text"
              style={{
                color: currentColor.prim,
                // marginBottom: (90.2 * window.innerHeight) / 1080,
              }}
            >
              {about[0]}
            </div>
            <div
              className="about-text"
              style={{
                color: currentColor.prim,
              }}
            >
              {about[1]}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="about-container-all">
      <div
        className="about-container"
        id="about"
        style={{
          height: "50vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          className="about"
          style={{
            position: "absolute",
            // paddingLeft: (500 * window.innerWidth) / 1920,
            // transform: "translateY(-25%)",
            color: currentColor.prim,
          }}
        >
          <span
            style={{
              color: currentColor.prim,
            }}
          >
            Human
          </span>
          <span style={{ color: currentColor.prim }}>Purpose</span>
          <span style={{ color: currentColor.prim }}>Resonate</span>
          <span style={{ color: currentColor.prim }}>Magic</span>
        </div>
      </div>
      <div
        className="about-text-container"
        style={
          {
            // fontSize: (28 * window.innerWidth) / 1920,
            // color: "#495f8c",
          }
        }
      >
        <div
          className="about-text"
          style={{
            color: currentColor.prim,
            marginBottom: (90.2 * window.innerHeight) / 1080,
          }}
        >
          {about[0]}
        </div>
        <div
          className="about-text"
          style={{
            color: currentColor.prim,
          }}
        >
          {about[1]}
        </div>
      </div>
    </div>
  );
};

export default About;
