import { useContext, useEffect, useRef, useState } from "react";
import "./Projects.css";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projects } from "../content";
const Projects = () => {
  const {
    currentColor,
    setCurrentView,
    setCurrentProject,
    currentProject,
    secondMargin,
  } = useContext(Context);
  const [projectNumber, setProjectNumber] = useState(null);
  const offset = useRef({ value: 0 });
  useEffect(() => {
    if (projectNumber === null) return;
    const temp = document.getElementById(currentProject);
    const temp2 = document.getElementById("projects");
    if (!temp) {
      gsap.to(".current-project", {
        marginTop: 0,
        duration: 0.5,
      });
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: "#projects",
          offsetY: 0,
        },
      });
      return;
    }

    // const temp2 = document.getElementById("projects");
    gsap.to(".current-project", {
      marginTop:
        temp.getBoundingClientRect().top - temp2.getBoundingClientRect().top,
    });
  }, [currentProject]);

  const tempCurProject = {
    title: "proj_3",
    project: [
      {
        image: "https://picsum.photos/200/300",
        text: null,
      },
      {
        image: "https://picsum.photos/200/300",
        text: " helloo",
      },
      {
        image: "https://picsum.photos/200/300",
        text: "helloo",
      },
    ],
  };
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
  }, []);
  useGSAP(() => {}, [currentProject]);
  useEffect(() => {
    projects.forEach((project) => {
      gsap.to(`#${project.id}`, {
        opacity: currentProject == project.id ? 1 : 0.6,
        fontStyle: currentProject == project.id ? "italic" : "normal",
        duration: 0.1,
      });
    });
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
            minWidth: "50vh",
          }}
        >
          <div className="projects">
            {projects.map((project, index) => {
              return (
                <>
                  <div
                    className="project"
                    id={project.id}
                    style={{
                      cursor: "pointer",
                      color: currentColor.prim,
                      fontSize: (76 * window.innerWidth) / 750,
                    }}
                    onClick={() => {
                      setProjectNumber(index);
                      if (currentProject === project.id) {
                        setCurrentProject(null);
                        return;
                      }
                      setCurrentProject(project.id);
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    className="current-project-mobile"
                    style={{
                      position: "relative",
                      // height: "100%",
                      // top: (323.3 * window.innerHeight) / 1080,
                      // paddingRight: (235.75 * window.innerWidth) / 1920,
                      // marginTop: offset.value,
                      fontSize: (28 * window.innerWidth) / 1920,
                      width: "100%",
                      overflow: "hidden",
                      opacity: 1,
                    }}
                  >
                    {currentProject && currentProject === project.id
                      ? tempCurProject.project.map((proj, index) => {
                          return (
                            <div>
                              <h1
                                style={{
                                  fontSize: (28 * window.innerWidth) / 1920,
                                }}
                              >
                                {proj.text}
                              </h1>
                              <img src={proj.image} />
                            </div>
                          );
                        })
                      : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="projects"
      id="projects"
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        zIndex: 10,
        display: "flex",
      }}
    >
      <div
        className="projects-container"
        style={{
          position: "relative",
          paddingTop: (323.3 * window.innerHeight) / 1080,
          paddingLeft: secondMargin,
          width: "50%",
        }}
      >
        {projects.map((project, index) => {
          return (
            <div
              className="project"
              id={project.id}
              style={{
                fontSize: (64 * window.innerWidth) / 1920,
                cursor: "pointer",
                color: currentColor.prim,
                marginBlock: 46,
              }}
              onClick={() => {
                gsap.to(window, {
                  duration: 0.1,
                  scrollTo: {
                    y: `#${project.id}`,
                    offsetY: 250,
                  },
                });
                if (currentProject === project.id) {
                  setCurrentProject(null);
                  return;
                }
                setProjectNumber(index);
                setCurrentProject(project.id);
              }}
            >
              {project.title}
            </div>
          );
        })}
      </div>
      <div
        className="current-project"
        style={{
          position: "relative",
          // height: "100%",
          // top: (323.3 * window.innerHeight) / 1080,
          // paddingRight: (235.75 * window.innerWidth) / 1920,
          // marginTop: offset.value,
          fontSize: (28 * window.innerWidth) / 1920,
          width: "50%",
          opacity: 0.6,
        }}
      >
        {currentProject ? (
          tempCurProject.project.map((proj, index) => {
            return (
              <div>
                <h1>{proj.text}</h1>
                <img src={proj.image} />
              </div>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1>select project to view</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
