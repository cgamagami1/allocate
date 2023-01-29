import { Outlet } from "react-router-dom";
import AddTransactionButton from "./AddTransactionButton";
import TransactionMenu from "./TransactionMenu";

const Menu = () => {
  return (
    <>
      {/* <div className="fixed top-0 left-0 z-30 grid w-screen h-screen bg-[#FFFFFF66] place-items-center">
        <TransactionMenu />
      </div> */}
      <AddTransactionButton />
      <Outlet />
    </>
  );
}

export default Menu;