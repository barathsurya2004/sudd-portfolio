import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
import icon1 from "../assets/icons/Colour icon.svg";
import axios from "axios";
import { googleUrl, url } from "../content";
import ColorIcon from "../assets/icons/ColorIcon";
const Contact = () => {
  const {
    setCurrentColor,
    currentColor,
    setCurrentView,
    secondMargin,
    thirdMargin,
  } = useContext(Context);
  const [disclaimer, setDisclaimer] = useState(false);
  const [selfPortrait, setSelfPortrait] = useState("https://picsum.photos/200");
  useGSAP(() => {
    gsap.to(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 2%",
        end: "bottom 2%",
        // markers: true,
        onEnter: () => {
          setCurrentView("Contact");
        },
        onEnterBack: () => {
          setCurrentView("Contact");
        },
      },
    });
  });
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get(url + "get-all-images");
  //       console.log(response.data);
  //       const temp = googleUrl + response.data.imageid;
  //       setSelfPortrait(temp);
  //       console.log(temp);
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);
  useEffect(() => {
    const element = document.querySelector(".disclaimer");
    gsap.set(".disclaimer-text", {
      y: element.clientHeight,
    });
  }, []);
  if (window.innerWidth <= 1000) {
    return (
      <div
        className="contact"
        style={{
          position: "relative",
          overflow: "hidden",
          color: currentColor.prim,
        }}
      >
        <div className="photo-container">
          <img src={selfPortrait} alt="" />
        </div>
        <div className="contact-container">
          <div
            className="contact-text"
            style={{
              color: currentColor.prim,
            }}
          >
            Drop a Hello!{" "}
          </div>
          <div
            className="footer-container"
            style={{
              color: currentColor.prim,
            }}
          >
            <span
              style={{
                color: currentColor.prim,
              }}
            >
              Linkedin
            </span>
            <span
              style={{
                color: currentColor.prim,
              }}
            >
              sudheshhimself@gmail.com
            </span>
          </div>
        </div>

        <div className="bassedoff">
          <p
            style={{
              color: currentColor.prim,
            }}
          >
            Based of{" "}
            <span
              style={{
                color: currentColor.prim,
              }}
            >
              Hyderabad
            </span>
          </p>
          <p
            style={{
              color: currentColor.prim,
            }}
          >
            Originally from{" "}
            <span
              style={{
                color: currentColor.prim,
              }}
            >
              Salem, India
            </span>
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            className="disclaimer"
            style={{
              // backgroundColor: "#ebefff",
              // position: "absolute",

              maskImage:
                "linear-gradient(0deg, rgba(0,176,218,0) 0%, rgba(0,212,255,0.5032387955182073) 2%, rgba(2,0,36,1) 5%, rgba(2,0,36,1) 95%, rgba(2,0,36,0.500437675070028) 97%, rgba(2,0,36,0) 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <p
              className="disclaimer-text"
              style={{
                fontSize: (21 * window.innerWidth) / 1920,
                color: "#ff0000",
                margin: 0,
              }}
            >
              All designs, visuals, and content on this site are the
              intellectual property of{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Sudhesh Venkatachalam{" "}
              </span>
              , including collaborative works. Materials contributed by others,
              if displayed, remain under respective licenses. Unauthorized use,
              reproduction, or distribution is strictly prohibited.
              <br />
              <br />
              This website was{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                designed{" "}
              </span>
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Sudhesh Venkatachalam{" "}
              </span>{" "}
              ,{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                developed{" "}
              </span>{" "}
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Barath Surya
              </span>{" "}
              , and{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                backend implementation
              </span>{" "}
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Mohamad Kaif
              </span>{" "}
              .
            </p>
          </div>
        </div>
        <div
          style={{
            color: currentColor.prim,
          }}
          className="footer-text"
          onClick={() => {
            const element = document.querySelector(".disclaimer");
            console.log(element);
            if (!disclaimer) {
              gsap.fromTo(
                ".disclaimer-text",
                {
                  y: element.clientHeight,
                },
                {
                  y: 0,
                  duration: 0.5,
                }
              );
            } else {
              gsap.fromTo(
                ".disclaimer-text",
                {
                  y: 0,
                },
                {
                  y: element.clientHeight,
                  duration: 0.5,
                }
              );
            }
            setDisclaimer(!disclaimer);
          }}
        >
          © 2024 / Sudhesh Venkatachalam.
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="contact"
        id="contact-jump"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          color: currentColor.prim,
        }}
      >
        <div
          className="contact-jump"
          style={{
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            className="photo-container"
            style={{
              position: "absolute",
              height: (566 * window.innerHeight) / 1080,
              width: (424 * window.innerHeight) / 1080,
            }}
          >
            {selfPortrait ? (
              <>
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    mixBlendMode: "overlay",
                    backgroundColor: currentColor.sec,
                    opacity: 0.3,
                    zIndex: 1,
                  }}
                />
                <img
                  src={selfPortrait}
                  loading="lazy"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </>
            ) : (
              <div>loading..</div>
            )}
          </div>
          <div
            className="contact-container"
            style={{
              position: "absolute",
            }}
          >
            <div
              className="contact-text"
              style={{
                color: currentColor.prim,
              }}
            >
              Let's connect!
              <br />
              Drop a Hello!
            </div>
            <div
              className="footer-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <span
                className="linkss"
                style={{
                  fontSize: (28 * window.innerWidth) / 1920,
                  fontFamily: "neue-haas-grotesk-text",
                  cursor: "pointer",
                  color: currentColor.prim,
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sudhesh-venkatachalam-492b66205/"
                  );
                }}
              >
                Linkedin
              </span>
              <span
                style={{
                  fontSize: (28 * window.innerWidth) / 1920,
                  color: currentColor.prim,
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("mailto:sudheshhimself@gmail.com");
                }}
              >
                sudheshhimself@gmail.com
              </span>
            </div>
          </div>{" "}
          <div
            className="bassedoff"
            style={{
              color: currentColor.prim,
            }}
          >
            <span
              style={{
                display: "block",
                color: currentColor.prim,
              }}
            >
              Based of{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: currentColor.prim,
                }}
              >
                Hyderabad
              </span>
            </span>
            <span
              style={{
                display: "block",
                color: currentColor.prim,
              }}
            >
              Originally from{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: currentColor.prim,
                }}
              >
                Salem, India
              </span>
            </span>
          </div>
          <div
            className="disclaimer"
            style={{
              position: "absolute",
              // zIndex: 10,
              bottom: (90.75 * window.innerHeight) / 1080,
              paddingRight: (350 * window.innerWidth) / 1920,
              // backgroundColor: "#ebefff",
              maskImage:
                "linear-gradient(0deg, rgba(0,176,218,0) 0%, rgba(0,212,255,0.5032387955182073) 2%, rgba(2,0,36,1) 5%, rgba(2,0,36,1) 95%, rgba(2,0,36,0.500437675070028) 97%, rgba(2,0,36,0) 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <p
              className="disclaimer-text"
              style={{
                fontSize: (21 * window.innerWidth) / 1920,
                color: "#ff0000",
                backgroundImage: `linear-gradient(to right, ${currentColor.sec}, ${currentColor.sec} )`,
                margin: 0,
                paddingBottom: (20 * window.innerHeight) / 1080,
              }}
            >
              All designs, visuals, and content on this site are the
              intellectual property of{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Sudhesh Venkatachalam{" "}
              </span>
              , including collaborative works. Materials contributed by others,
              if displayed, remain under respective licenses. Unauthorized use,
              reproduction, or distribution is strictly prohibited.
              <br />
              <br />
              This website was{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                designed{" "}
              </span>
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Sudhesh Venkatachalam{" "}
              </span>{" "}
              ,{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                developed{" "}
              </span>{" "}
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Barath Surya
              </span>{" "}
              , and{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                backend implementation
              </span>{" "}
              by{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                Mohamad Kaif
              </span>{" "}
              .
            </p>
          </div>
          <div
            className="footer-text"
            style={{
              fontFamily: "neue-haas-grotesk-display",
              fontWeight: 500,
              fontSize: (21 * window.innerWidth) / 1920,
              color: currentColor.prim,
            }}
            onClick={() => {
              const element = document.querySelector(".disclaimer");
              if (!disclaimer) {
                gsap.fromTo(
                  ".disclaimer-text",
                  {
                    y: element.clientHeight,
                  },
                  {
                    y: 0,
                    duration: 0.5,
                    // ease: "bounce.in",
                  }
                );
              } else {
                gsap.fromTo(
                  ".disclaimer-text",
                  {
                    y: 0,
                  },
                  {
                    y: element.clientHeight,
                    duration: 0.5,
                    // ease: "bounce.in",
                  }
                );
              }
              setDisclaimer(!disclaimer);
              //   opacity: 0,
              //   duration: 0.5,
              // });
            }}
          >
            © 2024 / Sudhesh Venkatachalam.
          </div>
        </div>
        <div
          className="icon-1"
          onClick={() => {
            const tl = gsap.timeline();
            tl.to(".contact-jump", {
              transform: "scale(0.997)",
              duration: 0.1,
              onComplete: () => {
                setCurrentColor();
              },
            }).to(".contact-jump", {
              transform: "scale(1)",
              duration: 0.1,
            });
          }}
          style={{
            position: "absolute",
            width: (100 * window.innerWidth) / 1920,
            cursor: "pointer",
          }}
        >
          <ColorIcon />
        </div>
      </div>
    </>
  );
};

export default Contact;
