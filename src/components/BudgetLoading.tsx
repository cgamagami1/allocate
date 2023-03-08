import { FC, ReactNode, useContext, useEffect } from "react";
import { BudgetContext } from "../context/BudgetContext";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";

type BudgetLoadingProps = {
  children: ReactNode;
}

const BudgetLoading: FC<BudgetLoadingProps> = ({ children }) => {
  const { isBudgetLoading } = useContext(BudgetContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      }
    });

    return unsubscribe;
  }, []);

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