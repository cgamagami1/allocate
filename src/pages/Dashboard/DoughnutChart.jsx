import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import { categories } from "../../constants";

const DoughnutChart = () => {
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
    plugins: {
      legend: {
        position: "bottom",
      }
    }
  };

  return (
    <div className="p-8">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}

export default DoughnutChart;