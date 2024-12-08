import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        //top should be 323.3px
        top: (343.7 * window.innerHeight) / 1080,
        left: (83.3 * window.innerWidth) / 1920,
        // paddingTop: (59 * window.innerHeight) / 1080,
      }}
    >
      <div
        className="logo"
        style={{
          fontFamily: "neue-haas-grotesk-display",
          fontWeight: 900,
          marginBottom: 11.33,
        }}
      >
        S
      </div>
      <div
        className="menu about"
        style={{
          fontFamily: "neue-haas-grotesk-text",
          marginBottom: 11.8625,
        }}
      >
        about
      </div>
      <div
        className="menu projects"
        style={{
          fontFamily: "neue-haas-grotesk-text",
          marginBottom: 11.7265,
        }}
      >
        projects
      </div>
      <div
        className="menu contact"
        style={{
          fontFamily: "neue-haas-grotesk-text",
        }}
      >
        contact
      </div>
    </nav>
  );
};

export default Navbar;
