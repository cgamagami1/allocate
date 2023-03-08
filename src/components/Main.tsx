import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BudgetProvider } from "../context/BudgetContext";
import { MenuProvider } from "../context/MenuContext";
import AddTransactionButton from "./AddTransactionButton";
import MenuContainer from "./MenuContainer";
import BudgetLoading from "./BudgetLoading";

const Main: FC = () => {
  return (
    <BudgetProvider>
      <MenuProvider>
        <BudgetLoading>
          <MenuContainer />
          <AddTransactionButton />
          <Outlet />
        </BudgetLoading>
      </MenuProvider>
    </BudgetProvider>
  );
}

export default Main;