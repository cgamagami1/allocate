import { createContext, useState } from "react";

export const MenuContext = createContext({
  currentMenu: "none",
  isEditing: false,
});

export const MenuProvider = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState("none");
  const [isEditing, setIsEditing] = useState(false);

  const value = {
    currentMenu,
    isEditing,
    setCurrentMenu,
    setIsEditing,
  };
  
  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}