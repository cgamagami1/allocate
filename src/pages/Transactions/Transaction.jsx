import { useContext } from "react";
import CategoryIcon from "../../components/CategoryIcon";
import { BudgetContext } from "../../context/BudgetContext";
import closeIcon from "../../assets/close.svg";
import { MenuContext } from "../../context/MenuContext";
import useRipple from "../../utils/useRipple";
import Ripple from "../../components/Ripple";

const Transaction = ({ transaction }) => {
  const { categories, removeTransaction } = useContext(BudgetContext);
  const { setCurrentMenu, setEditedItem } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  const { description, categoryId, date, amount } = transaction;
  const category = categories.find(category => category.id === categoryId);

  const handleOnClick = (e) => {
    handleRipple(e);
    setEditedItem(transaction);
    setCurrentMenu("transaction");
  }

  const handleOnRemove = (e) => {
    e.stopPropagation();
    removeTransaction(transaction);
  }
  
  return (
    <div className="relative py-4 overflow-hidden border-b border-gray-300 close-icon-container hover:cursor-pointer" onClick={handleOnClick}>
      <div className="flex items-start justify-between mb-2">
        <span className="block font-bold text-gray-500">{date.toLocaleString({ weekday: "short", year: "numeric", month: "short", day: "numeric" })}</span>
        <img className="hidden w-4 my-1 hover:cursor-pointer close-icon" src={closeIcon} alt="close icon" onClick={handleOnRemove} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <CategoryIcon category={category} />

          <div className="flex flex-col justify-between ml-8">
            <h2 className="text-xl font-bold">{description}</h2>

            <span className="text-gray-500 ">{category.name}</span>
          </div>
        </div>
        
        <span className="text-3xl font-light text-gray-700">-${amount}</span>
      </div>

      {isRippleVisible && <Ripple ripplePosition={ripplePosition} />}
    </div>
  );
}

export default Transaction;