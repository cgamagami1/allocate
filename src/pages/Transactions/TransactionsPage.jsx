import Transactions from "./Transactions";
import Spending from "../Dashboard/Spending";

const TransactionsPage = () => {
  return (
    <div className="flex justify-between flex-grow gap-16 p-16">
      <Transactions />
      <Spending />
    </div>
  );
}

export default TransactionsPage;