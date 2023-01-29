import Transactions from "./Transactions";
import Spending from "../../components/Spending";

const TransactionsPage = () => {
  return (
    <>
      <Transactions />
      <div className="flex-grow hidden xl:flex">
        <Spending />
      </div>
    </>
  );
}

export default TransactionsPage;