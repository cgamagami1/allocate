import CategoryList from "../../components/CategoryList";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";
import Page from "../../components/Page";

const Dashboard = () => {
  return (
    <Page isGrid={true}>
      <HeaderBar title="Dashboard" />
      <CategoryList />
      <DoughnutChart />
    </Page>
  );
}

export default Dashboard;