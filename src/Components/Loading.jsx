import React, { useEffect, useState } from "react";
import "./Loading.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const Loading = () => {
  const [loaded, setLoaded] = useState({ value: 0 });
  useEffect(() => {
    gsap.set(".loading-text", { x: (-1000 * window.innerWidth) / 1920 });
  }, []);
  useGSAP(() => {
    gsap.to(loaded, {
      value: 100,
      roundProps: "value",
      duration: 5,
      ease: "power2.out",
      onUpdate: () => {
        setLoaded({ value: loaded.value });
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
      },
    });
  });
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
              ((loaded.value - 100) * 10 * window.innerWidth) / 1920
            }px)`,
            zIndex: 0,
            fontWeight: 6 * loaded.value - 100,
          }}
        >
          {loaded.value}
        </p>
      </div>
    </div>
  );
};

export default Loading;