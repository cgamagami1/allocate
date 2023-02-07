import { createContext, useState } from "react";

export const MenuContext = createContext({
  currentMenu: "none",
  isEditing: false,
});

export const MenuProvider = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState("none");
  const [editedItem, setEditedItem] = useState(null);

  const value = {
    currentMenu,
    setCurrentMenu,
    editedItem,
    setEditedItem,
  };
  
  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}