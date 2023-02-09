import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import AddTransactionButton from "./AddTransactionButton";
import CategoryMenu from "./CategoryMenu";
import TransactionMenu from "./TransactionMenu";

const MenuContainer = () => {
  const { currentMenu } = useContext(MenuContext);

  return (
    <>
      {currentMenu !== "none" && (
      <div className="fixed top-0 left-0 z-40 grid w-screen h-screen bg-[#ffffff00] place-items-center perspective">
        {currentMenu === "transaction" && <TransactionMenu />}
        {currentMenu === "category" && <CategoryMenu />}
      </div>)}
      <AddTransactionButton />
      <Outlet />
    </>
  );
}

export default MenuContainer;