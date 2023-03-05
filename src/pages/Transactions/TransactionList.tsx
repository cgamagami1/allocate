import { useContext, useState, FC } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import CategoryFilterButton from "./CategoryFilterButton";
import TransactionCard from "./TransactionCard";

const TransactionList: FC = () => {
  const { transactions, categories } = useContext(BudgetContext);
  const [categoryFilterId, setCategoryFilterId] = useState<number | null>(null);

  return (
    <div className="px-8 mt-6 overflow-y-scroll perspective">
      <div className="sticky top-0 z-10 h-16 bg-white border-b border-gray-300 flex items-start gap-2 overflow-x-scroll">
        <CategoryFilterButton isSelected={categoryFilterId === null} name="All" handleOnClick={() => setCategoryFilterId(null)} />
        
        {categories
          .filter(category => category.id !== -1)
          .map(category => (
            <CategoryFilterButton key={category.id} isSelected={categoryFilterId === category.id} name={category.name} handleOnClick={() => setCategoryFilterId(category.id)} />
        ))}
      </div>
      {transactions
        .filter(transaction => categoryFilterId === null || transaction.categoryId === categoryFilterId)
        .sort((a, b) => Number(b.date) - Number(a.date))
        .map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;