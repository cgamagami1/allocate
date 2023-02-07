import CategoryIcon from "./CategoryIcon";
import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";

const CategoryBar = ({ category }) => {
  const { transactions } = useContext(BudgetContext);
  const { id, name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.categoryId === id ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = remaining / budget * 100;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className="h-full transition-all duration-700 rounded-3xl" style={{ width: hasMounted ? `${remainingPercentage}%` : "0%", backgroundColor: color }}></div>
        </div>
      </div>
      <p className="text-sm text-right text-gray-500 2xl:text-base"><span className="font-bold">{name}</span> | ${remaining} of ${budget} Left</p>
    </div>
  );
}

export default CategoryBar;