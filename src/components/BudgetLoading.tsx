import { FC, ReactNode, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import LoadingScreen from "./LoadingScreen";

type BudgetLoadingProps = {
  children: ReactNode;
}

const BudgetLoading: FC<BudgetLoadingProps> = ({ children }) => {
  const { isBudgetLoading } = useContext(BudgetContext);

  if (isBudgetLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>{children}</>
  );
}

export default BudgetLoading;