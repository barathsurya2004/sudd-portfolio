import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="about-container"
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
            top: (323.3 * window.innerHeight) / 1080,
            left: (500 * window.innerWidth) / 1920,
          }}
        >
          <span
            style={{
              fontSize: (89 * window.innerWidth) / 1920,
            }}
          >
            Human
          </span>
          <span
            style={{
              fontSize: (89 * window.innerWidth) / 1920,
            }}
          >
            Purpose
          </span>
          <span
            style={{
              fontSize: (89 * window.innerWidth) / 1920,
            }}
          >
            Resonate
          </span>
          <span
            style={{
              fontSize: (89 * window.innerWidth) / 1920,
            }}
          >
            Magic
          </span>
        </div>
      </div>
      <div
        className="about-text-container"
        style={{
          paddingLeft: (1107.4 * window.innerWidth) / 1920,
          paddingRight: (235.75 * window.innerWidth) / 1920,
          // fontSize: (28 * window.innerWidth) / 1920,
          // color: "#495f8c",
        }}
      >
        <div
          className="about-text"
          style={{
            fontSize: (28 * window.innerWidth) / 1920,
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
            fontSize: (28 * window.innerWidth) / 1920,
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
    </>
  );
};

export default About;
