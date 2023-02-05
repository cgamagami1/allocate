import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import CategoryBar from "./CategoryBar";

const SpendingCategories = () => {
  const { categories } = useContext(BudgetContext);
  
  return (
    <div className="p-8 overflow-y-scroll ">
      {categories.map(category => (
        <CategoryBar key={category.id} category={category} />
      ))}
    </div>
  );
}

export default SpendingCategories;