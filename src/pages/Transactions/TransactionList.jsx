import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(BudgetContext);

  return (
    <div className="px-8 mt-6 overflow-y-scroll perspective">
      <div className="sticky top-0 z-10 h-16 bg-white border-b border-gray-300">
        <span className="inline-block px-4 py-2 font-bold text-green-600 bg-green-200 border border-green-600 rounded-lg">All</span>
        <span className="inline-block px-4 py-2 ml-4 font-bold text-gray-700 rounded-lg">Gas</span>
        <span className="inline-block px-4 py-2 ml-4 font-bold text-gray-700 rounded-lg">Groceries</span>
      </div>
      {transactions.sort((a, b) => b.date - a.date).map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;