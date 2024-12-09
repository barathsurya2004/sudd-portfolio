import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
import icon1 from "../assets/icons/Colour icon.svg";
import axios from "axios";
import { googleUrl, url } from "../content";
const Contact = () => {
  const { setCurrentView, secondMargin, thirdMargin } = useContext(Context);
  const [disclaimer, setDisclaimer] = useState(false);
  const [selfPortrait, setSelfPortrait] = useState("");
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
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(url + "get-all-images");
        console.log(response.data);
        const temp = googleUrl + response.data.imageid;
        setSelfPortrait(temp);
        console.log(temp);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  useEffect(() => {
    gsap.set(".disclaimer-text", {
      y: 200,
    });
  }, []);
  if (window.innerWidth <= 1000) {
    return (
      <div
        className="contact"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="photo-container">
          <img src={selfPortrait} alt="" />
        </div>
        <div className="contact-container">
          <div className="contact-text">Drop a Hello! </div>
          <div className="footer-container">
            <span>Linkedin</span>
            <span>sudheshhimself@gmail.com</span>
          </div>
        </div>

        <div className="bassedoff">
          <p>
            Based of <span>Hyderabad</span>
          </p>
          <p>
            Originally from <span>Salem, India</span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              optio rerum suscipit pariatur dolores fugiat accusamus vel ducimus
              quaerat nesciunt ab expedita illum quam velit odio corrupti!
              Dolore, quae minima.
            </p>
          </div>
        </div>
        <div
          className="footer-text"
          onClick={() => {
            if (!disclaimer) {
              gsap.fromTo(
                ".disclaimer-text",
                {
                  y: 200,
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
                  y: 200,
                  duration: 0.5,
                }
              );
            }
            setDisclaimer(!disclaimer);
          }}
        >
          © 2024 Sudhesh Venkatachalam.
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="contact"
        id="contact"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
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
            <img
              src={selfPortrait}
              loading="lazy"
              alt=""
              style={{
                height: "100%",
                width: "100%",
              }}
            />
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
              color: "#495f8c",
            }}
          >
            Let's connect!,
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
              style={{
                fontSize: (28 * window.innerWidth) / 1920,
                fontFamily: "neue-haas-grotesk-text",

                color: "#495f8c",
              }}
            >
              Linkedin
            </span>
            <span
              style={{
                fontSize: (28 * window.innerWidth) / 1920,
                color: "#495f8c",
              }}
            >
              sudheshhimself@gmail.com
            </span>
          </div>
        </div>{" "}
        <div className="bassedoff">
          <span
            style={{
              display: "block",
            }}
          >
            Bassed of{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Hyderabad
            </span>
          </span>
          <span
            style={{
              display: "block",
            }}
          >
            Originally from{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
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
              backgroundImage: "linear-gradient(to right, #ebefff, #ebefff)",
              margin: 0,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            optio rerum suscipit pariatur dolores fugiat accusamus vel ducimus
            quaerat nesciunt ab expedita illum quam velit odio corrupti! Dolore,
            quae minima.
          </p>
        </div>
        <div
          className="footer-text"
          style={{
            position: "absolute",
            fontFamily: "neue-haas-grotesk-display",
            fontWeight: 500,
            fontSize: (21 * window.innerWidth) / 1920,
            color: "#495f8c",
          }}
          onClick={() => {
            if (!disclaimer) {
              gsap.fromTo(
                ".disclaimer-text",
                {
                  y: 200,
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
                  y: 200,
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
          © 2024 Sudhesh Venkatachalam.
        </div>
        <img
          className="icon-1"
          src={icon1}
          alt=""
          style={{
            position: "absolute",
          }}
        />
      </div>
    </>
  );
};

export default Contact;
