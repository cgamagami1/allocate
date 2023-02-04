import SpendingCategories from "../../components/SpendingCategories";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-grow md:px-16 md:page-grid">
      <HeaderBar title="Dashboard" />
      <SpendingCategories />
      <div className="hidden md:block">
        <DoughnutChart />
      </div>
    </div>
  );
}

export default Dashboard;