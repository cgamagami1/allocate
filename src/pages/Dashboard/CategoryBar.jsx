import { transactions } from "../../constants";
import CategoryIcon from "../../components/CategoryIcon";

const CategoryBar = ({ category }) => {
  const { id, name, color, budget } = category;
  const spent = transactions.reduce((acc, current) => current.categoryId === id ? acc + current.amount : acc, 0);
  const remaining = budget - spent;
  const remainingPercentage = (remaining / budget) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="flex-grow h-8 p-1 ml-2 bg-gray-200 rounded-3xl">
          <div className={`h-full ${color} rounded-3xl px-4 pt-2 pb-3`} style={{ width: `${remainingPercentage}%` }}></div>
        </div>
      </div>
      <div className="flex justify-end text-sm text-gray-500 xl:text-base">
        <h2 className="mr-1 font-bold">{name}</h2>
        <span className=""> | ${remaining} of ${budget} Left</span>
      </div>
    </div>
  );
}

export default CategoryBar;