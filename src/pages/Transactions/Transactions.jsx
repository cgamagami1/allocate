import Transaction from "./Transaction";
import { transactions } from "../../constants";

const Transactions = () => {
  return (
    <div className="flex flex-col h-screen pb-16">
      <div className="shadow-lg">
        <h2 className="px-4 pt-6 pb-2 text-3xl font-bold tracking-wide">Transactions</h2>
        <span className="inline-block px-4 py-2 my-4 ml-4 font-bold text-white bg-black rounded-lg">All</span>
        <span className="inline-block px-4 py-2 my-4 ml-4 font-bold bg-gray-300 rounded-lg">Gas</span>
        <span className="inline-block px-4 py-2 m-4 font-bold bg-gray-300 rounded-lg">Groceries</span>
      </div>
      <div className="flex-grow-0 overflow-y-scroll">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;