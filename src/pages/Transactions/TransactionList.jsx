import Transaction from "./Transaction";
import { transactions } from "../../constants";

const TransactionList = () => {
  return (
    <div className="px-8 mt-8 overflow-y-scroll">
      <div className="sticky top-0 h-16 bg-white border-b border-gray-300">
        <span className="inline-block px-4 py-2 font-bold text-gray-300 bg-gray-700 rounded-lg">All</span>
        <span className="inline-block px-4 py-2 ml-4 font-bold text-gray-700 bg-gray-300 rounded-lg">Gas</span>
        <span className="inline-block px-4 py-2 ml-4 font-bold text-gray-700 bg-gray-300 rounded-lg">Groceries</span>
      </div>
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;