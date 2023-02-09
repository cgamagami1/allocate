import CategoryList from "../../components/CategoryList";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";

const Dashboard = () => {
  return (
    <div className="flex-grow page-grid-mobile md:px-16 md:page-grid">
      <HeaderBar title="Dashboard" />
      <CategoryList />
      <DoughnutChart />
    </div>
  );
}

export default Dashboard;