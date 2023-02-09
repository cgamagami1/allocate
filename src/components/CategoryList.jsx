import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { MenuContext } from "../context/MenuContext";
import CategoryBar from "./CategoryBar";
import PlusIcon from "./svgs/PlusIcon";

const CategoryList = () => {
  const { categories } = useContext(BudgetContext);
  const { setCurrentMenu } = useContext(MenuContext);
  
  const handleOnAddCategory = () => {
    setCurrentMenu("category");
  }

  return (
    <div className="px-8 mt-6 overflow-y-scroll">
      <div className="box-border sticky top-0 z-10 grid justify-center p-2 mb-2 bg-green-200 border-2 border-green-600 rounded-xl hover:cursor-pointer" onClick={handleOnAddCategory}>
        <div className="w-8">
          <PlusIcon isAddTransactionIcon={false} />
        </div>
      </div>
      {categories.filter(category => category.id !== -1).map(category => (
        <CategoryBar key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;