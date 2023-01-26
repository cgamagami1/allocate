import CategoryBar from "./CategoryBar";
import { categories } from "../../constants";

const Overview = () => {
  return (
    <div className="flex flex-col h-screen pb-16">
      <h2 className="px-4 pt-6 pb-2 text-3xl font-bold tracking-wide">Overview</h2>
      <div className="flex-grow px-8 overflow-y-scroll">
        {categories.map(category => (
          <CategoryBar key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Overview;