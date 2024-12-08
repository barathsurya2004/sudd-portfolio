import { createContext, useState } from "react";

export const Context = createContext({
  currentView: "Hero",
  setCurrentView: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("Hero");
  const value = {
    currentView,
    setCurrentView,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
