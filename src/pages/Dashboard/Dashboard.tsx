import CategoryList from "../../components/CategoryList";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";
import Page from "../../components/Page";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <Page isGrid={true}>
      <HeaderBar title="Dashboard" />
      <CategoryList />
      <DoughnutChart />
    </Page>
  );
}

export default Dashboard;