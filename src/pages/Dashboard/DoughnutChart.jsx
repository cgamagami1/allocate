import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

const DoughnutChart = () => {
  const { categories } = useContext(BudgetContext);

  const chartData = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        label: "Budget",
        data: categories.map(category => category.budget),
        backgroundColor: categories.map(category => category.color),
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 16
          }
        }
      }
    }
  };

  return (
    <div className="p-8 h-[70%]">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}

export default DoughnutChart;