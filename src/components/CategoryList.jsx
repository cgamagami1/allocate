import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import CategoryBar from "./CategoryBar";
import AddCategoryButton from "./AddCategoryButton";

const CategoryList = () => {
  const { categories } = useContext(BudgetContext);

  return (
    <div className="px-8 mt-6 overflow-y-scroll">
      <AddCategoryButton />

      {categories.filter(category => category.id !== -1).map(category => (
        <CategoryBar key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;