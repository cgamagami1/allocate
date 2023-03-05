import TransactionList from "./TransactionList";
import HeaderBar from "../../components/HeaderBar";
import CategoryList from "../../components/CategoryList";
import Page from "../../components/Page";
import { FC } from "react";

const Transactions: FC = () => {
  return (
    <Page isGrid={true}>
      <HeaderBar title="Transactions" />
      <TransactionList />
      <CategoryList />
    </Page>
  );
}

export default Transactions;