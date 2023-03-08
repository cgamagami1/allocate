import { FC } from "react";
import { useContext } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import CategoryMenu from "./CategoryMenu";
import TransactionMenu from "./TransactionMenu";
import AuthMenu from "./AuthMenu";

const MenuContainer: FC = () => {
  const { menuStatus } = useContext(MenuContext);

  return (
    <>
    {menuStatus !== MENU_STATUS.NONE && (
      <div className="fixed top-0 left-0 z-40 grid w-screen h-screen bg-[#ffffff00] place-items-center perspective">
        {menuStatus === MENU_STATUS.TRANSACTION && <TransactionMenu />}
        {menuStatus === MENU_STATUS.CATEGORY && <CategoryMenu />}
        {menuStatus === MENU_STATUS.AUTH && <AuthMenu />}
      </div>)}
    </>
  );
}

export default MenuContainer;