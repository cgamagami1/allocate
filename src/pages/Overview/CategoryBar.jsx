import { transactions } from "../../constants";
import CategoryIcon from "../../components/CategoryIcon";

const CategoryBar = ({ category }) => {
  const { name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.category === name ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = (remaining / budget) * 100;

  return (
    <div>
      <h3 className="my-2 font-bold tracking-wide text-md md:text-2xl">{name}</h3>
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className={`h-full ${color} rounded-3xl px-4 pt-2 pb-3`} style={{ width: `${remainingPercentage}%` }}></div>
        </div>
      </div>
      <span className="text-gray-500 ml-14">${remaining} of ${budget} Remaining</span>
    </div>
  );
}

export default CategoryBar;