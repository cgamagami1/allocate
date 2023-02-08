import { createContext, useState } from "react";

export const MenuContext = createContext({
  currentMenu: "none",
  setCurrentMenu: () => {},
  editedItem: null,
  setEditedItem: () => {},
  isEditing: false,
});

export const MenuProvider = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState("none");
  const [editedItem, setEditedItem] = useState(null);
  const isEditing = editedItem !== null;

  const value = {
    currentMenu,
    setCurrentMenu,
    editedItem,
    setEditedItem,
    isEditing,
  };
  
  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}