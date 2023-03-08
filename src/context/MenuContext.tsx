import { createContext, useState, FC, ReactNode, Dispatch, SetStateAction } from "react";
import { BudgetItem } from "./BudgetContext";

export enum MENU_STATUS {
  NONE = "NONE",
  TRANSACTION = "TRANSACTION",
  CATEGORY = "CATEGORY",
  AUTH = "AUTH",
}

type EditedItem = BudgetItem | null;

type MenuContextValue = {
  menuStatus: MENU_STATUS;
  setMenuStatus: Dispatch<SetStateAction<MENU_STATUS>>;
  editedItem: EditedItem;
  setEditedItem: Dispatch<SetStateAction<EditedItem>>;
  isEditing: boolean;
  settingsCallback: () => void;
  setSettingsCallback: Dispatch<SetStateAction<() => void>>
}

export const MenuContext = createContext<MenuContextValue>({} as MenuContextValue);

type MenuProviderProps = {
  children: ReactNode;
}

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(MENU_STATUS.NONE);
  const [editedItem, setEditedItem] = useState<EditedItem>(null);
  const [settingsCallback, setSettingsCallback] = useState<() => void>(() => {});
  const isEditing = editedItem !== null;

  const value: MenuContextValue = {
    menuStatus,
    setMenuStatus,
    editedItem,
    setEditedItem,
    isEditing,
    settingsCallback,
    setSettingsCallback
  };
  
  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}