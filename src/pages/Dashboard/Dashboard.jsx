import Spending from "./Spending";
import Budget from "./Budget";
import MonthlySpending from "./MonthlySpending";

const Dashboard = () => {
  return (
    <div className="flex justify-between flex-grow gap-16 p-16">
      <Spending />
      <div className="flex flex-col gap-16">
        <Budget />
        <MonthlySpending />
      </div>
    </div>
  );
}

export default Dashboard;