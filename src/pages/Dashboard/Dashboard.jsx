import Spending from "../../components/Spending";
import Budget from "./Budget";
import MonthlySpending from "./MonthlySpending";

const Dashboard = () => {
  return (
    <>
      <Spending />
      <div className="xl:flex xl:flex-col xl:gap-16">
        <Budget />
        <MonthlySpending />
      </div>
    </>
  );
}

export default Dashboard;