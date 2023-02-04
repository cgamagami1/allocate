import TransactionList from "./TransactionList";
import HeaderBar from "../../components/HeaderBar";
import SpendingCategories from "../../components/SpendingCategories";

const Transactions = () => {
  return (
    <div className="flex flex-col flex-grow md:px-16 lg:page-grid">
      <HeaderBar title="Transactions" />
      <TransactionList />
      <div className="hidden lg:block">
        <SpendingCategories />
      </div>
    </div>
  );
}

export default Transactions;