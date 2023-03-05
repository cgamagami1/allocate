import CategoryIcon from "./CategoryIcon";
import Ripple from "./Ripple";
import useRipple from "../utils/useRipple";
import { useContext, useEffect, useState, FC, MouseEvent } from "react";
import { BudgetContext, Category } from "../context/BudgetContext";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import { DateTime } from "luxon";
import closeIcon from "../assets/close.svg";

type CategoryBarProps = {
  category: Category;
}

const CategoryBar: FC<CategoryBarProps> = ({ category }) => {
  const { transactions, removeCategory } = useContext(BudgetContext);
  const { setMenuStatus, setEditedItem } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  const { id, name, color, budget } = category;
  const spent = transactions
    .filter(transaction => transaction.date.month === DateTime.now().month && transaction.date.year === DateTime.now().year)
    .reduce((acc, current) => current.categoryId === id ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = Math.max(0, remaining) / budget * 100;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleOnEdit = (e: MouseEvent<HTMLDivElement>): void => {
    handleRipple(e);
    setEditedItem(category);
    setMenuStatus(MENU_STATUS.CATEGORY);
  }

  const handleOnRemove = (e: MouseEvent<HTMLImageElement>): void => {
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