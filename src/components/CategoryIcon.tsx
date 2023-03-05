import { FC } from "react";
import { Category } from "../context/BudgetContext";

type CategoryIconProps = {
  category: Category;
}

const CategoryIcon: FC<CategoryIconProps> = ({ category }) => {

  return (
    <img className="w-12 h-12 p-3 transition-colors duration-700 rounded-xl" src={category.icon} alt={`${category.name} icon`} style={{backgroundColor: category.color}} />
  );
}

export default CategoryIcon;