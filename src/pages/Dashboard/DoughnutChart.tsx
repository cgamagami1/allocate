import { ChartData, ChartOptions } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { useContext, FC } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: FC = () => {
  const { categories } = useContext(BudgetContext);

  const chartData: ChartData<"doughnut"> = {
    labels: categories.filter(category => category.id !== -1).map(category => category.name),
    datasets: [
      {
        label: "Budget",
        data: categories.filter(category => category.id !== -1).map(category => category.budget),
        backgroundColor: categories.filter(category => category.id !== -1).map(category => category.color),
      }
    ]
  };

  const chartOptions: ChartOptions<"doughnut"> = {
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