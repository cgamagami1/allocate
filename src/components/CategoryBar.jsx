import CategoryIcon from "./CategoryIcon";
import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";
import useRipple from "../utils/useRipple";
import { MenuContext } from "../context/MenuContext";
import closeIcon from "../assets/close.svg";
import Ripple from "./Ripple";

const CategoryBar = ({ category }) => {
  const { transactions, removeCategory } = useContext(BudgetContext);
  const { setCurrentMenu, setEditedItem } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  const { id, name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.categoryId === id ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = Math.max(0, remaining) / budget * 100;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleOnEdit = (e) => {
    handleRipple(e);
    setEditedItem(category);
    setCurrentMenu("category");
  }

  const handleOnRemove = (e) => {
    e.stopPropagation();
    removeCategory(category);
  }
  
  return (
    <div className="relative py-2 overflow-hidden hover:cursor-pointer close-icon-container" onClick={handleOnEdit}>
      <img className="absolute top-0 right-0 hidden w-3 hover:cursor-pointer close-icon" src={closeIcon} alt="close icon" onClick={handleOnRemove} />

      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className="h-full transition-all duration-700 rounded-3xl" style={{ width: hasMounted ? `${remainingPercentage}%` : "0%", backgroundColor: color }}></div>
        </div>
      </div>
      <p className="text-sm text-right text-gray-500 2xl:text-base"><span className="font-bold">{name}</span> | ${remaining} of ${budget} Left</p>

      {isRippleVisible && <Ripple ripplePosition={ripplePosition} />}
    </div>
  );
}

export default CategoryBar;