import TransactionList from "./TransactionList";
import HeaderBar from "../../components/HeaderBar";
import CategoryList from "../../components/CategoryList";

const Transactions = () => {
  return (
    <div className="flex-grow md:px-16 page-grid">
      <HeaderBar title="Transactions" />
      <TransactionList />
      <CategoryList />
    </div>
  );
}

export default Transactions;