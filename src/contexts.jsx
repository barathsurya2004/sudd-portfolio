import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({
  currentView: "Hero",
  setCurrentView: () => {},
  currentProject: null,
  setCurrentProject: () => {},
  loading: false,
  setLoading: () => {},
  currentColor: null,
  setCurrentColor: () => {},
  ratio: 0,
});

export const ContextProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("Hero");
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(window.innerHeight / window.innerWidth);
  const [firstMargin, setFirstMargin] = useState(
    (83.3 * window.innerWidth) / 1920
  );
  const [secondMargin, setSecondMargin] = useState(
    500 * (window.innerWidth / 1920)
  );
  const [thirdMargin, setThirdMargin] = useState(
    (1107.4 * window.innerWidth) / 1920
  );
  const [currentColor, setcurcol] = useState({
    prim: "#3c4e73",
    sec: "#f5f7ff",
  });
  const [colorIndex, setColorIndex] = useState(0);
  const [colors, setColors] = useState([
    {
      prim: "#3c4e73",
      sec: "#f5f7ff",
    },
  ]);
  useEffect(() => {
    var temp = [];
    axios
      .get(
        import.meta.env.VITE_SERVER_URL +
          "/api/get-all-colors/" +
          import.meta.env.VITE_ID
      )
      .then((res) => {
        console.log("res", res.data);
        temp.push({
          prim: res.data.colors.primary1,
          sec: res.data.colors.secondary1,
        });
        temp.push({
          prim: res.data.colors.primary2,
          sec: res.data.colors.secondary2,
        });
        temp.push({
          prim: res.data.colors.primary3,
          sec: res.data.colors.secondary3,
        });
        temp.push({
          prim: res.data.colors.primary4,
          sec: res.data.colors.secondary4,
        });
        temp.push({
          prim: res.data.colors.primary5,
          sec: res.data.colors.secondary5,
        });
        setColors(temp);
        // setcurcol(temp[0]);
      });
  }, []);
  const setCurrentColor = () => {
    console.log("colorIndex", colorIndex);
    setColorIndex((colorIndex + 1) % colors.length);
    if (colors[colorIndex] === undefined) {
      return;
    }
    setcurcol(colors[colorIndex]);
  };
  useEffect(() => {
    const resize = () => {
      setRatio(window.innerHeight / window.innerWidth);
      // console.log("portrait", ratio);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const value = {
    currentView,
    setCurrentView,
    currentProject,
    setCurrentProject,
    loading,
    setLoading,
    ratio,
    firstMargin,
    secondMargin,
    thirdMargin,
    currentColor,
    setCurrentColor,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
