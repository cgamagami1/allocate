import { useContext, FC } from "react";
import { Outlet } from "react-router-dom";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import AddTransactionButton from "./AddTransactionButton";
import CategoryMenu from "./CategoryMenu";
import TransactionMenu from "./TransactionMenu";

const MenuContainer: FC = () => {
  const { menuStatus } = useContext(MenuContext);

  return (
    <>
      {menuStatus !== MENU_STATUS.NONE && (
      <div className="fixed top-0 left-0 z-40 grid w-screen h-screen bg-[#ffffff00] place-items-center perspective">
        {menuStatus === MENU_STATUS.TRANSACTION && <TransactionMenu />}
        {menuStatus === MENU_STATUS.CATEGORY && <CategoryMenu />}
      </div>)}
      <AddTransactionButton />
      <Outlet />
    </>
  );
}

export default MenuContainer;