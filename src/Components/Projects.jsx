import { useContext, useEffect } from "react";
import "./Projects.css";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Projects = () => {
  const { setCurrentView, setCurrentProject, currentProject } =
    useContext(Context);

  useGSAP(() => {
    gsap.to(".projects", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        end: "bottom 2%",
        // markers: true,
        onEnter: () => {
          setCurrentView("Projects");
        },
        onEnterBack: () => {
          setCurrentView("Projects");
        },
      },
    });
  });
  useEffect(() => {
    if (currentProject === null) {
      gsap.to(".proj3", {
        opacity: 0.6,
      });
      gsap.to(".insights", {
        opacity: 0.6,
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
      });
      gsap.to(".typography", {
        opacity: 0.6,
      });
    }
    if (currentProject === "proj3") {
      gsap.to(".proj3", {
        opacity: 1,
      });
      gsap.to(".insights", {
        opacity: 0.6,
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
      });
      gsap.to(".typography", {
        opacity: 0.6,
      });
    }
    if (currentProject === "insights") {
      gsap.to(".proj3", {
        opacity: 0.6,
      });
      gsap.to(".insights", {
        opacity: 1,
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
      });
      gsap.to(".typography", {
        opacity: 0.6,
      });
    }
    if (currentProject === "stained-glass") {
      gsap.to(".proj3", {
        opacity: 0.6,
      });
      gsap.to(".insights", {
        opacity: 0.6,
      });
      gsap.to(".stained-glass", {
        opacity: 1,
      });
      gsap.to(".typography", {
        opacity: 0.6,
      });
    }
    if (currentProject === "typography") {
      gsap.to(".proj3", {
        opacity: 0.6,
      });
      gsap.to(".insights", {
        opacity: 0.6,
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
      });
      gsap.to(".typography", {
        opacity: 1,
      });
    }
  }, [currentProject]);
  return (
    <div
      className="projects"
      id="projects"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="projects-container"
        style={{
          position: "absolute",
          top: (323.3 * window.innerHeight) / 1080,
        }}
      >
        <div
          className="project proj3"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => setCurrentProject("proj3")}
        >
          proj_3
        </div>
        <div
          className="project insights"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => setCurrentProject("insights")}
        >
          insights
        </div>
        <div
          className="project stained-glass"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => setCurrentProject("stained-glass")}
        >
          Stained Glass
        </div>
        <div
          className="project typography"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => setCurrentProject("typography")}
        >
          Typography for Story Telling
        </div>
      </div>
      <div
        className="current-project"
        style={{
          position: "absolute",
          top: (323.3 * window.innerHeight) / 1080,
          paddingRight: (235.75 * window.innerWidth) / 1920,
          fontSize: (28 * window.innerWidth) / 1920,
          opacity: 0.6,
          color: "#495f8c",
        }}
      >
        select project to view
        {/* <div
          style={{
            height: 500,
            width: 500,
            backgroundColor: "white",
          }}
        >
           <iframe
            src="https://project3852.wordpress.com/"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
