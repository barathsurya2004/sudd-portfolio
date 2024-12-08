import { useContext } from "react";
import { Context } from "../contexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
const Contact = () => {
  const { setCurrentView, secondMargin, thirdMargin } = useContext(Context);
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
  return (
    <>
      <div
        className="contact"
        id="contact"
        style={{
          height: "100vh",
          width: "100%",
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
          className="footer-text"
          style={{
            position: "absolute",
            fontFamily: "neue-haas-grotesk-display",
            fontWeight: 500,
            fontSize: (21 * window.innerWidth) / 1920,
            color: "#495f8c",
            bottom: (37.9 * window.innerHeight) / 1080,
          }}
        >
          © 2024 Sudhesh Venkatachalam.
        </div>
      </div>
    </>
  );
};

export default Contact;
