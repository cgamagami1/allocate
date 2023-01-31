import { Outlet } from "react-router-dom";
import AddTransactionButton from "./AddTransactionButton";
import TransactionMenu from "./TransactionMenu";

const Menu = () => {
  return (
    <>
      {/* <TransactionMenu /> */}
      <AddTransactionButton />
      <Outlet />
    </>
  );
}

export default Menu;