import CategoryList from "../../components/CategoryList";
import DoughnutChart from "./DoughnutChart";
import HeaderBar from "../../components/HeaderBar";

const Dashboard = () => {
  return (
    <div className="flex-grow page-grid md:px-16">
      <HeaderBar title="Dashboard" />
      <CategoryList />
      <DoughnutChart />
    </div>
  );
}

export default Dashboard;