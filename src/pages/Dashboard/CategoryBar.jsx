import { transactions } from "../../constants";
import CategoryIcon from "../../components/CategoryIcon";

const CategoryBar = ({ category }) => {
  const { name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.categoryName === name ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = (remaining / budget) * 100;
  
  return (
    <div>
      <h2 className="block mb-2 font-bold text-gray-500">{name}</h2>
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className={`h-full ${color} rounded-3xl px-4 pt-2 pb-3`} style={{ width: `${remainingPercentage}%` }}></div>
        </div>
      </div>
      <span className="block text-gray-500 ml-14 mb-2">${remaining} of ${budget} Remaining</span>
    </div>
  );
}

export default CategoryBar;