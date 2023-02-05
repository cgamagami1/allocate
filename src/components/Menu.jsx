import { Outlet } from "react-router-dom";
import AddTransactionButton from "./AddTransactionButton";
import AddTransactionMenu from "./AddTransactionMenu";

const Menu = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-40 grid w-screen h-screen bg-[#ffffff00] place-items-center">
        <AddTransactionMenu />
      </div>
      <AddTransactionButton />
      <Outlet />
    </>
  );
}

export default Menu;