import { useGSAP } from "@gsap/react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useContext } from "react";
import { Context } from "../contexts";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { setCurrentView, secondMargin, thirdMargin, ratio } =
    useContext(Context);

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
          }}
        >
          <div className="about">
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
              }}
            >
              Human
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
              }}
            >
              Purpose
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
              }}
            >
              Resonate
            </span>
            <span
              style={{
                fontSize: (76 * window.innerWidth) / 750,
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
                color: "#495f8c",
                // marginBottom: (90.2 * window.innerHeight) / 1080,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              vel nihil unde repellendus blanditiis ut accusantium enim, autem
              quod fuga sunt temporibus saepe, itaque, architecto culpa quis
              voluptates? Repellat, optio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </div>
            <div
              className="about-text"
              style={{
                color: "#495f8c",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              doloremque perspiciatis commodi, dignissimos ipsum officia
              necessitatibus quisquam aut eaque voluptatem maxime inventore
              temporibus quaerat, nemo ut voluptate molestiae pariatur!
              Vitae?Lorem ipsum dolor
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
          }}
        >
          <span style={{}}>Human</span>
          <span style={{}}>Purpose</span>
          <span style={{}}>Resonate</span>
          <span style={{}}>Magic</span>
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
            color: "#495f8c",
            marginBottom: (90.2 * window.innerHeight) / 1080,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel
          nihil unde repellendus blanditiis ut accusantium enim, autem quod fuga
          sunt temporibus saepe, itaque, architecto culpa quis voluptates?
          Repellat, optio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </div>
        <div
          className="about-text"
          style={{
            color: "#495f8c",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          doloremque perspiciatis commodi, dignissimos ipsum officia
          necessitatibus quisquam aut eaque voluptatem maxime inventore
          temporibus quaerat, nemo ut voluptate molestiae pariatur! Vitae?Lorem
          ipsum dolor
        </div>
      </div>
    </div>
  );
};

export default About;
