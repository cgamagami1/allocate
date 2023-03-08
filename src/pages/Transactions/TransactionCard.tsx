import { useContext, FC, MouseEvent } from "react";
import CategoryIcon from "../../components/CategoryIcon";
import { BudgetContext, Category } from "../../context/BudgetContext";
import closeIcon from "../../assets/close.svg";
import { MenuContext, MENU_STATUS } from "../../context/MenuContext";
import useRipple from "../../utils/useRipple";
import Ripple from "../../components/Ripple";
import { Transaction} from "../../context/BudgetContext";
import { DateTime } from "luxon";

type TransactionCardProps = {
  transaction: Transaction;
}

const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  const { categories, removeTransaction } = useContext(BudgetContext);
  const { setMenuStatus, setEditedItem } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  const { description, categoryId, amount } = transaction;
  const date = DateTime.fromISO(transaction.date);
  
  const category = categories.find(category => category.id === categoryId);
  if (!category) throw new Error("Transaction's categoryId could not be matched to any existing category id");

  const handleOnClick = (e: MouseEvent<HTMLDivElement>): void => {
    handleRipple(e);
    setEditedItem(transaction);
    setMenuStatus(MENU_STATUS.TRANSACTION);
  }

  const handleOnRemove = (e: MouseEvent<HTMLImageElement>): void => {
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

export default TransactionCard;