import TransactionList from "./TransactionList";
import HeaderBar from "../../components/HeaderBar";
import CategoryList from "../../components/CategoryList";
import Page from "../../components/Page";

const Transactions = () => {
  return (
    <Page isGrid={true}>
      <HeaderBar title="Transactions" />
      <TransactionList />
      <CategoryList />
    </Page>
  );
}

export default Transactions;