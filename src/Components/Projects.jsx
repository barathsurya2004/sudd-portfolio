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
        fontStyle: "normal",
      });
      gsap.to(".insights", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".typography", {
        opacity: 0.6,
        fontStyle: "normal",
      });
    }
    if (currentProject === "proj3") {
      gsap.to(".proj3", {
        opacity: 1,
        fontStyle: "italic",
      });
      gsap.to(".insights", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".typography", {
        opacity: 0.6,
        fontStyle: "normal",
      });
    }
    if (currentProject === "insights") {
      gsap.to(".proj3", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".insights", {
        opacity: 1,
        fontStyle: "italic",
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".typography", {
        fontStyle: "normal",
        opacity: 0.6,
      });
    }
    if (currentProject === "stained-glass") {
      gsap.to(".proj3", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".insights", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".stained-glass", {
        opacity: 1,
        fontStyle: "italic",
      });
      gsap.to(".typography", {
        opacity: 0.6,
        fontStyle: "normal",
      });
    }
    if (currentProject === "typography") {
      gsap.to(".proj3", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".insights", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".stained-glass", {
        opacity: 0.6,
        fontStyle: "normal",
      });
      gsap.to(".typography", {
        opacity: 1,
        fontStyle: "italic",
      });
    }
  }, [currentProject]);
  if (window.innerWidth <= 800) {
    return (
      <div className="projects-container-all">
        <div
          className="projects-container"
          id="projects"
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <div className="projects">
            <div
              className="project proj3"
              id="proj3"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentProject === "proj3") {
                  setCurrentProject(null);
                  gsap.to("#proj3-iframe", {
                    height: 0,
                  });
                  return;
                } else {
                  gsap.to("#proj3-iframe", {
                    height: "100%",
                  });
                }
                setCurrentProject("proj3");
              }}
            >
              <p>proj_3</p>
              <div id="proj3-iframe" className="actual-project">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, assumenda qui magnam ad, eos totam ratione adipisci
                expedita aperiam quo est, inventore corporis perspiciatis autem
                voluptate accusamus nihil? Placeat, dignissimos!;Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quibusdam, a eum
                ullam, hic amet est inventore quidem harum voluptates laboriosam
                error quam repellat corporis! Non porro inventore dolores
                pariatur possimus!Lorem
              </div>
            </div>
            <div
              id="insights"
              className="project insights"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentProject === "insights") {
                  setCurrentProject(null);
                  return;
                }

                setCurrentProject("insights");
              }}
            >
              insights
            </div>
            <div
              id="stained-glass"
              className="project stained-glass"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentProject === "stained-glass") {
                  setCurrentProject(null);
                  return;
                }
                setCurrentProject("stained-glass");
              }}
            >
              Stained Glass
            </div>
            <div
              id="typography"
              className="project typography"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentProject === "typography") {
                  setCurrentProject(null);
                  return;
                }
                setCurrentProject("typography");
              }}
            >
              Typography
            </div>
          </div>
          <div className="project-click-info">select project to view</div>
        </div>
      </div>
    );
  }

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
          id="proj3"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 0.1,
              scrollTo: {
                y: "#proj3",
                offsetY: (343.7 * window.innerHeight) / 1080,
              },
            });
            setCurrentProject("proj3");
          }}
        >
          proj_3
        </div>
        <div
          id="insights"
          className="project insights"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 0.1,
              scrollTo: {
                y: "#insights",
                offsetY: (343.7 * window.innerHeight) / 1080,
              },
            });
            setCurrentProject("insights");
          }}
        >
          insights
        </div>
        <div
          id="stained-glass"
          className="project stained-glass"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 0.1,
              scrollTo: {
                y: "#stained-glass",
                offsetY: (343.7 * window.innerHeight) / 1080,
              },
            });

            setCurrentProject("stained-glass");
          }}
        >
          Stained Glass
        </div>
        <div
          id="typography"
          className="project typography"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 0.1,
              scrollTo: {
                y: "#typography",
                offsetY: (343.7 * window.innerHeight) / 1080,
              },
            });
            setCurrentProject("typography");
          }}
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
