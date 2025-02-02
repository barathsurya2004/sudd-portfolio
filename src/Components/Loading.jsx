import React, { useContext, useEffect, useRef, useState } from "react";
import "./Loading.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { Context } from "../contexts";
gsap.registerPlugin(Flip);

const Loading = () => {
  const [loaded, setLoaded] = useState({ value: 0 });
  const [position, setPosition] = useState({ value: 0 });
  const { loading, setLoading, currentColor } = useContext(Context);
  const [textelem, setTextelem] = useState({ clientHeight: 0 });
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    const temp = document.querySelector(".loading-text");
    setTextelem({ clientHeight: temp.clientHeight });
    console.log(temp.clientHeight);
    disableScroll();
  }, []);
  useEffect(() => {
    if (window.innerWidth < 1400) {
      const text = document.querySelector(".loading-name-container");
      const loadingText = document.querySelector(".loading-number-container");
      const diff =
        loadingText.getBoundingClientRect().top -
        text.getBoundingClientRect().top;
      console.log(
        loadingText.getBoundingClientRect().top,
        text.getBoundingClientRect().top,
        diff
      );
      gsap.set(".loading-text", {
        y: -diff,
        opacity: 0,
      });
    } else {
      const text = document.querySelector(".loading-name-container");
      const loadingText = document.querySelector(".loading-number-container");
      if (!loadingText || !text) return;
      const diff =
        loadingText.getBoundingClientRect().left -
        text.getBoundingClientRect().left;

      gsap.set(".loading-text", {
        x: -diff,
        opacity: 0,
      });
    }
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".loading-name-text",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        onComplete: () => {
          gsap.set(".loading-text", { opacity: 1 });
        },
      }
    );
    gsap.fromTo(".loading-name-text", { y: 100 }, { y: 0, duration: 0.5 });

    gsap.to(loaded, {
      value: 100,
      delay: 0.7,
      roundProps: "value",
      duration: 6,
      ease: "power2.out",
      onStart: () => {
        if (window.innerWidth < 1400) {
          gsap.to(".loading-text", {
            y: 0,
            duration: 6,
            ease: "power2.out",
          });
        } else {
          gsap.to(".loading-text", {
            x: 0,
            duration: 4.5,
            ease: "power2.out",
          });
        }
      },
      onUpdate: () => {
        window.scrollTo(0, 0);
        setLoaded({ value: loaded.value });
        if (loaded.value < 100) {
          setPosition({ value: loaded.value });
        }

        // console.log(loaded.value);
      },
      onComplete: () => {
        gsap.set(".loading-name-text", { background: null });
        gsap.to(".loading-text-container", {
          duration: 0.5,
          y: -100,
          opacity: 0,
        });
        gsap.to(".loading-background", {
          duration: 1,
          onComplete: () => {
            gsap.set(".loading-container", { display: "none" });
            enableScroll();
          },
        });
        setLoading(false);

        gsap.fromTo(
          ".navbar",
          {
            y: "100dvh",
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
        );
      },
    });
  });
  if (window.innerWidth < 1400) {
    return (
      <div
        className="loading-container"
        style={{
          height: "100dvh",
          width: "100%",
          // fontFamily: "neue-haas",
          position: "fixed",
        }}
      >
        <div
          className="loading-background"
          style={{
            height: "100%",
            width: "100%",
            background: currentColor.sec,
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
          }}
        />
        <div
          className="loading-text-container"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="loading-name-container">
            <p
              className="loading-name-text"
              style={{
                background: currentColor.sec,
                position: "relative",
                zIndex: 1,
                color: currentColor.prim,
              }}
            >
              Sudhesh
              <br />
              Venkatachalam
            </p>
          </div>
          <div className="loading-number-container">
            <p
              className="loading-text"
              style={{
                position: "relative",

                zIndex: 0,
                fontFamily: "neue-haas-unica",
                fontWeight: 3 * loaded.value + 500,
                opacity: 0,
                color: currentColor.prim,
              }}
            >
              {loaded.value}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="loading-container"
      style={{
        height: "100dvh",
        width: "100%",
        // fontFamily: "neue-haas",
        position: "fixed",
      }}
    >
      <div
        className="loading-background"
        style={{
          height: "100%",
          width: "100%",
          // background: currentColor.sec,
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />
      <div
        className="loading-text-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          transform: "translateY(25%)",
        }}
      >
        <div className="loading-name-container">
          <p
            className="loading-name-text"
            style={{
              background: currentColor.sec,
              position: "relative",
              zIndex: 1,
              color: currentColor.prim,
            }}
          >
            Sudhesh
            <br />
            Venkatachalam
          </p>
        </div>
        <div className="loading-number-container">
          <p
            className="loading-text"
            style={{
              position: "relative",

              zIndex: 0,
              fontFamily: "neue-haas-unica",
              fontWeight: 3 * loaded.value + 300,
              opacity: 0,
              color: currentColor.prim,
            }}
          >
            {loaded.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
