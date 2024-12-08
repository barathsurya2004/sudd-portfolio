import Lottie from "react-lottie";
import animationData from "../assets/json/airport_1.json";
const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        fontFamily: "neue-haas-grotesk-display",
        fontSize: 100,
        fontWeight: 900,
        height: "100vh",
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        paddingLeft: (500 * window.innerWidth) / 1920,
        paddingTop: (328 * window.innerHeight) / 1080,
      }}
    >
      {/* <span
        style={{
          width: "40%",
          color: "#495f8c",
          fontFamily: "neue-haas-grotesk-text",
          fontWeight: 700,
        }}
      >
        Hello! I&#8217;m Sudhesh Venkatachalam
      </span> */}
      <span>
        <Lottie loop={true} animationData={animationData} />
      </span>
    </div>
  );
};

export default Hero;
