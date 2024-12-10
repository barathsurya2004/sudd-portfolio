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
  const colors = [
    {
      prim: "#3c4e73",
      sec: "#f5f7ff",
    },
    {
      prim: "#f5f5f5",
      sec: "#141414",
    },
    {
      prim: "#141414",
      sec: "#f5f5f5",
    },
  ];
  const setCurrentColor = () => {
    console.log("colorIndex", colorIndex);
    setColorIndex((colorIndex + 1) % colors.length);
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
