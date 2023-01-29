import Spending from "../../components/Spending";
import Budget from "./Budget";
import MonthlySpending from "./MonthlySpending";

const Dashboard = () => {
  return (
    <div className="xl:flex xl:justify-between flex-grow xl:gap-16 xl:p-16 mt-16 xl:mt-0">
      <Spending />
      <div className="xl:flex xl:flex-col xl:gap-16">
        <Budget />
        <MonthlySpending />
      </div>
    </div>
  );
}

export default Dashboard;