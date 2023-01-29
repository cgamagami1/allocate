import Transactions from "./Transactions";
import Spending from "../../components/Spending";

const TransactionsPage = () => {
  return (
    <div className="xl:flex xl:justify-between flex-grow xl:gap-16 xl:p-16 mt-16 xl:mt-0">
      <Transactions />
      <div className="hidden flex-grow xl:flex">
        <Spending />
      </div>
    </div>
  );
}

export default TransactionsPage;