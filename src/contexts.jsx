import { createContext, useEffect, useState } from "react";

export const Context = createContext({
  currentView: "Hero",
  setCurrentView: () => {},
  currentProject: null,
  setCurrentProject: () => {},
  loading: false,
  setLoading: () => {},
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
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
