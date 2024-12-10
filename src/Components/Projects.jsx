import { useContext, useEffect } from "react";
import "./Projects.css";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projects } from "../content";
const Projects = () => {
  const { currentColor, setCurrentView, setCurrentProject, currentProject } =
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
          }}
        >
          <div className="projects">
            {projects.map((project, index) => {
              return (
                <div
                  className="project"
                  id={project.id}
                  style={{
                    cursor: "pointer",
                    color: currentColor.prim,
                  }}
                  onClick={() => {
                    if (currentProject === project.title) {
                      setCurrentProject(null);
                      return;
                    }
                    if (currentProject === project.id) {
                      setCurrentProject(null);
                      return;
                    }
                    setCurrentProject(project.id);
                  }}
                >
                  {project.title}
                </div>
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
        {projects.map((project, index) => {
          return (
            <div
              className="project"
              id={project.id}
              style={{
                fontSize: (64 * window.innerWidth) / 1920,
                cursor: "pointer",
                color: currentColor.prim,
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
          position: "absolute",
          top: (323.3 * window.innerHeight) / 1080,
          paddingRight: (235.75 * window.innerWidth) / 1920,
          fontSize: (28 * window.innerWidth) / 1920,
          opacity: 0.6,
        }}
      >
        {currentProject
          ? // <div
            //   style={{
            //     height: (500 * window.innerWidth) / 1920,
            //     width: (500 * window.innerWidth) / 1920,
            //     backgroundColor: "white",
            //   }}
            // >
            //   <iframe
            //     src="https://project3852.wordpress.com/"
            //     width={"100%"}
            //     height={"100%"}
            //   ></iframe>
            // </div>
            null
          : "select project to view"}
      </div>
    </div>
  );
};

export default Projects;
