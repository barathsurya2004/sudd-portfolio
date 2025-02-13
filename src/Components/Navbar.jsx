import { useGSAP } from "@gsap/react";
import "./Navbar.css";
import { useContext, useEffect } from "react";
import { Context } from "../contexts";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
const Navbar = () => {
  const { currentColor, setCurrentView, currentView, firstMargin } =
    useContext(Context);
  useEffect(() => {
    gsap.set(".navbar", {
      y: "100dvh",
    });
  }, []);
  useEffect(() => {
    console.log(currentView);
    if (currentView === "Hero") {
      gsap.to(".about-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".projects-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".contact-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
    }
    if (currentView === "About") {
      gsap.to(".about-m", {
        fontStyle: "italic",
        fontWeight: 500,
        opacity: 1,
        duration: 0.02,
      });
      gsap.to(".projects-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".contact-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
    }
    if (currentView === "Projects") {
      gsap.to(".about-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".projects-m", {
        fontStyle: "italic",
        fontWeight: 500,
        opacity: 1,
        duration: 0.02,
      });
      gsap.to(".contact-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
    }
    if (currentView === "Contact") {
      gsap.to(".about-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".projects-m", {
        fontStyle: "normal",
        fontWeight: 400,
        opacity: 0.6,
        duration: 0.02,
      });
      gsap.to(".contact-m", {
        fontStyle: "italic",
        fontWeight: 500,
        opacity: 1,
        duration: 0.02,
      });
    }
  }, [currentView]);
  return (
    <nav
      className="navbar"
      style={{
        //top should be 323.3px
        left: firstMargin,
        zIndex: 11,
        // paddingTop: (59 * window.innerHeight) / 1080,
      }}
    >
      <div
        className="logo"
        onClick={() => {
          var now;
          if (currentView === "Hero") {
            now = ".hero";
          }
          if (currentView === "Projects") {
            now = ".projects";
          }
          if (currentView === "About") {
            now = ".about-container-all";
          }
          if (currentView === "Contact") {
            now = ".contact";
          }

          const tl = gsap.timeline();
          tl.fromTo(
            now,
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(0.997)",
              duration: 0.16,
              ease: "power1.out",
            }
          )
            .to(window, {
              scrollTo: "#hero",
              duration: 0.001,
            })
            .fromTo(
              ".hero",
              {
                transform: "scale(0.997)",
              },
              {
                transform: "scale(1)",
                duration: 0.1,
                ease: "power1.in",
              }
            )
            .set(now, {
              transform: "scale(1)",
              opacity: 1,
            });
          setCurrentView("Hero");
        }}
        style={{
          fontFamily: "neue-haas-grotesk-display",
          fontWeight: 900,
          marginBottom: 11.33,
          cursor: "pointer",
          color: currentColor.prim,
        }}
      >
        S
      </div>
      <div
        className="menu about-m"
        onClick={() => {
          var now;
          if (currentView === "Hero") {
            now = ".hero-text";
          }
          if (currentView === "Projects") {
            now = ".projects";
          }
          if (currentView === "About") {
            now = ".about-container-all";
          }
          if (currentView === "Contact") {
            now = ".contact";
          }

          const tl = gsap.timeline();
          tl.fromTo(
            now,
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(0.997)",
              duration: 0.16,
              ease: "power1.out",
            }
          )

            .to(window, {
              scrollTo: "#about",
              duration: 0.001,
            })

            .fromTo(
              ".about-container-all",
              {
                transform: "scale(0.997)",
              },
              {
                transform: "scale(1)",
                duration: 0.1,
                ease: "power1.in",
              }
            )
            .set(now, {
              transform: "scale(1)",
              opacity: 1,
            });

          setCurrentView("About");
        }}
        style={{
          fontFamily: "neue-haas-grotesk-text",
          marginBottom: 11.8625,
          cursor: "pointer",
          color: currentColor.prim,
        }}
      >
        about
      </div>
      <div
        className="menu projects-m"
        onClick={() => {
          var now;
          if (currentView === "Hero") {
            now = ".hero-text";
          }
          if (currentView === "Projects") {
            now = ".projects";
          }
          if (currentView === "About") {
            now = ".about-container-all";
          }
          if (currentView === "Contact") {
            now = ".contact";
          }

          const tl = gsap.timeline();
          tl.fromTo(
            now,
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(0.997)",
              duration: 0.16,
              ease: "power1.out",
            }
          )

            .to(window, {
              scrollTo: "#projects",
              duration: 0.001,
            })

            .fromTo(
              ".projects",
              {
                transform: "scale(0.997)",
              },
              {
                transform: "scale(1)",
                duration: 0.1,
                ease: "power1.in",
              }
            )
            .set(now, {
              transform: "scale(1)",
              opacity: 1,
            });

          setCurrentView("Projects");
        }}
        style={{
          fontFamily: "neue-haas-grotesk-text",
          marginBottom: 11.7265,
          cursor: "pointer",
          color: currentColor.prim,
        }}
      >
        projects
      </div>
      <div
        className="menu contact-m"
        onClick={() => {
          var now;
          if (currentView === "Hero") {
            now = ".hero-text";
          }
          if (currentView === "Projects") {
            now = ".projects";
          }
          if (currentView === "About") {
            now = ".about-container-all";
          }
          if (currentView === "Contact") {
            now = ".contact";
          }

          const tl = gsap.timeline();
          tl.fromTo(
            now,
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(0.997)",
              duration: 0.16,
              ease: "power1.out",
            }
          )

            .to(window, {
              scrollTo: ".contact",
              duration: 0.001,
            })

            .fromTo(
              ".contact",
              {
                transform: "scale(0.997)",
              },
              {
                transform: "scale(1)",
                duration: 0.1,
                ease: "power1.in",
              }
            )
            .set(now, {
              transform: "scale(1)",
              opacity: 1,
            });

          setCurrentView("Contact");
        }}
        style={{
          fontFamily: "neue-haas-grotesk-text",
          cursor: "pointer",
          color: currentColor.prim,
        }}
      >
        contact
      </div>
    </nav>
  );
};

export default Navbar;
