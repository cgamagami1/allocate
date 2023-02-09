import TransactionList from "./TransactionList";
import HeaderBar from "../../components/HeaderBar";
import CategoryList from "../../components/CategoryList";

const Transactions = () => {
  return (
    <div className="flex flex-col flex-grow md:pl-16 md:pr-32 lg:page-grid">
      <HeaderBar title="Transactions" />
      <TransactionList />
      <CategoryList />
    </div>
  );
}

export default Transactions;