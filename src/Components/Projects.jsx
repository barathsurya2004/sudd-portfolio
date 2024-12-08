import "./Projects.css";
const Projects = () => {
  return (
    <div
      className="projects"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        className="projects-container"
        style={{
          position: "absolute",
          top: (323.3 * window.innerHeight) / 1080,
          left: (500 * window.innerWidth) / 1920,
        }}
      >
        <div
          className="project"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
          }}
        >
          proj_3
        </div>
        <div
          className="project"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
          }}
        >
          insights
        </div>
        <div
          className="project"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
          }}
        >
          Stained Glass
        </div>
        <div
          className="project"
          style={{
            fontSize: (64 * window.innerWidth) / 1920,
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
          left: (1107.4 * window.innerWidth) / 1920,
          paddingRight: (235.75 * window.innerWidth) / 1920,
          fontSize: (28 * window.innerWidth) / 1920,
          opacity: 0.6,
          color: "#495f8c",
        }}
      >
        select project to view
      </div>
    </div>
  );
};

export default Projects;
