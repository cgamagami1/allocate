import SpendingCategories from "../../components/SpendingCategories";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";

const Dashboard = () => {
  return (
    <div className="flex-grow dashboard-grid">
      <HeaderBar title="Dashboard" />
      <SpendingCategories />
      <DoughnutChart />
    </div>
  );
}

export default Dashboard;