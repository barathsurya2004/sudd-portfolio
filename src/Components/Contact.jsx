import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
const Contact = () => {
  const { setCurrentView, secondMargin, thirdMargin } = useContext(Context);
  const [disclaimer, setDisclaimer] = useState(false);
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
    gsap.set(".disclaimer-text", {
      y: 200,
    });
  }, []);
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
            top: (334.7 * window.innerHeight) / 1080,
          }}
        >
          <img src="https://picsum.photos/300/400" alt="" />
        </div>
        <div
          className="contact-container"
          style={{
            position: "absolute",
            top: (334.7 * window.innerHeight) / 1080,
            paddingRight: (235.75 * window.innerWidth) / 1920,
          }}
        >
          <div
            className="contact-text"
            style={{
              fontSize: (28 * window.innerWidth) / 1920,
              color: "#495f8c",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsum, eveniet aperiam libero magni, suscipit minus hic modi totam,
            pariatur nihil magnam odio tempora fuga nam cumque rerum. Dolorum,
            illo.
          </div>
        </div>{" "}
        <div
          className="footer-container"
          style={{
            position: "absolute",
            bottom: (40.8 * window.innerHeight) / 1080,
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
            bottom: (37.9 * window.innerHeight) / 1080,
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
      </div>
    </>
  );
};

export default Contact;
