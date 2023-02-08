import CategoryIcon from "./CategoryIcon";
import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";
import useRipple from "../utils/useRipple";
import { MenuContext } from "../context/MenuContext";

const CategoryBar = ({ category }) => {
  const { transactions } = useContext(BudgetContext);
  const { setCurrentMenu, setEditedItem } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  const { id, name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.categoryId === id ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = remaining / budget * 100;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleOnClick = (e) => {
    handleRipple(e);
    setEditedItem(category);
    setCurrentMenu("category");
  }
  
  return (
    <div className="relative py-2 overflow-hidden hover:cursor-pointer" onClick={handleOnClick}>
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className="h-full transition-all duration-700 rounded-3xl" style={{ width: hasMounted ? `${remainingPercentage}%` : "0%", backgroundColor: color }}></div>
        </div>
      </div>
      <p className="text-sm text-right text-gray-500 2xl:text-base"><span className="font-bold">{name}</span> | ${remaining} of ${budget} Left</p>

      {isRippleVisible && <span className="absolute bg-[#00000033] translate-x-[-50%] translate-y-[-50%] rounded-full ripple-animation" 
        style={{ left: ripplePosition.x + "px", top: ripplePosition.y + "px" }}></span>}
    </div>
  );
}

export default CategoryBar;