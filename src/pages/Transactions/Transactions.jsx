import Transaction from "./Transaction";
import { transactions } from "../../constants";
import HeaderBar from "../../components/HeaderBar";
import SpendingCategories from "../../components/SpendingCategories";

const Transactions = () => {
  return (
    <div className="flex-grow px-16 transactions-grid">
      <HeaderBar title="Transactions" />
      <div className="px-8 col-span-2">
        <span className="inline-block px-4 py-2 my-4 font-bold text-gray-300 bg-gray-700 rounded-lg">All</span>
        <span className="inline-block px-4 py-2 my-4 ml-4 font-bold text-gray-700 bg-gray-300 rounded-lg">Gas</span>
        <span className="inline-block px-4 py-2 m-4 font-bold text-gray-700 bg-gray-300 rounded-lg">Groceries</span>
      </div>
      <div className="px-8 overflow-y-scroll">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
      <SpendingCategories />
    </div>
  );
}

export default Transactions;