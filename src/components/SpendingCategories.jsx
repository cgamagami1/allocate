import CategoryBar from "../pages/Dashboard/CategoryBar";
import { categories } from "../constants";

const SpendingCategories = () => {
  return (
    <div className="px-8 py-4 overflow-y-scroll ">
      {categories.map(category => (
        <CategoryBar key={category.id} category={category} />
      ))}
    </div>
  );
}

export default SpendingCategories;