import { createContext, useState, FC, ReactNode, Dispatch, SetStateAction } from "react";
import { BudgetItem } from "./BudgetContext";

export enum MENU_STATUS {
  NONE = "NONE",
  TRANSACTION = "TRANSACTION",
  CATEGORY = "CATEGORY"
}

type EditedItem = BudgetItem | null;

type MenuContextValue = {
  menuStatus: MENU_STATUS;
  setMenuStatus: Dispatch<SetStateAction<MENU_STATUS>>;
  editedItem: EditedItem;
  setEditedItem: Dispatch<SetStateAction<EditedItem>>;
  isEditing: boolean;
}

export const MenuContext = createContext<MenuContextValue>({} as MenuContextValue);

type MenuProviderProps = {
  children: ReactNode;
}

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(MENU_STATUS.NONE);
  const [editedItem, setEditedItem] = useState<EditedItem>(null);
  const isEditing = editedItem !== null;

  const value: MenuContextValue = {
    menuStatus,
    setMenuStatus,
    editedItem,
    setEditedItem,
    isEditing,
  };
  
  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}