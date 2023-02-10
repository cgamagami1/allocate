import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import CategoryFilterButton from "./CategoryFilterButton";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions, categories } = useContext(BudgetContext);

  return (
    <div className="px-8 mt-6 overflow-y-scroll perspective">
      <div className="sticky top-0 z-10 h-16 bg-white border-b border-gray-300 flex items-start gap-2 overflow-x-scroll">
        <CategoryFilterButton isSelected={true} name="All" />
        
        {categories.filter(category => category.id !== -1).map(category => (
          <CategoryFilterButton isSelected={false} name={category.name} />
        ))}
      </div>
      {transactions.sort((a, b) => b.date - a.date).map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;