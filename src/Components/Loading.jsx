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
  const { loading, setLoading } = useContext(Context);
  const [textelem, setTextelem] = useState({ clientHeight: 0 });
  useEffect(() => {
    const temp = document.querySelector(".loading-text");
    setTextelem({ clientHeight: temp.clientHeight });
    console.log(temp.clientHeight);
  }, []);
  useEffect(() => {
    if (window.innerWidth < 1400) {
      gsap.set(".loading-text", {
        y: (0 * window.innerHeight) / 1080,
        opacity: 0,
      });
      gsap.set(".loading-text", {
        x: (-1500 * window.innerWidth) / 1920,
        opacity: 0,
      });
    } else {
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
    gsap.fromTo(".loading-name-text", { y: 100 }, { y: 0, duration: 0.7 });

    gsap.to(loaded, {
      value: 100,
      delay: 0.7,
      roundProps: "value",
      duration: 6,
      ease: "power2.out",
      onUpdate: () => {
        setLoaded({ value: loaded.value });
        if (loaded.value < 100) {
          setPosition({ value: loaded.value });
        }
        console.log(loaded.value);
      },
      onComplete: () => {
        gsap.set(".loading-name-text", { background: null });
        gsap.to(".loading-text-container", {
          duration: 1,
          y: -100,
          opacity: 0,
        });
        gsap.to(".loading-background", {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            gsap.set(".loading-container", { display: "none" });
          },
        });
        setLoading(false);
      },
    });
  });
  if (window.innerWidth < 1400) {
    return (
      <div
        className="loading-container"
        style={{
          height: "100vh",
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
            background: "#495f8c",
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
          <p
            className="loading-name-text"
            style={{
              background: "#495f8c",
              position: "relative",
              zIndex: 1,
            }}
          >
            Sudhesh
            <br />
            Venkatachalam
          </p>
          <p
            className="loading-text"
            style={{
              position: "relative",
              transform: `translateY(${
                ((loaded.value - 100) * 5 * window.innerHeight) / 1080
              }px)`,
              zIndex: 0,
              fontFamily: "neue-haas-unica",
              fontWeight: 3 * loaded.value + 300,
              opacity: 0,
            }}
          >
            {loaded.value}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="loading-container"
      style={{
        height: "100vh",
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
          background: "#495f8c",
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
        <p
          className="loading-name-text"
          style={{
            background: "#495f8c",
            position: "relative",
            zIndex: 1,
          }}
        >
          Sudhesh
          <br />
          Venkatachalam
        </p>
        <p
          className="loading-text"
          style={{
            position: "relative",
            transform: `translateX(${
              ((position.value - 100) * 15 * window.innerWidth) / 1920
            }px)`,
            zIndex: 0,
            fontFamily: "neue-haas-unica",
            fontWeight: 3 * loaded.value + 300,
            opacity: 0,
          }}
        >
          {loaded.value}
        </p>
      </div>
    </div>
  );
};

export default Loading;
