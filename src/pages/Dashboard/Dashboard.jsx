import Spending from "./Spending";
import Budget from "./Budget";
import MonthlySpending from "./MonthlySpending";

const Dashboard = () => {
  return (
    <>
      <Spending />
      <div className="flex flex-col gap-16">
        <Budget />
        <MonthlySpending />
      </div>
    </>
  );
}

export default Dashboard;