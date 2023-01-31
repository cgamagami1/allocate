import CategoryBar from "../pages/Dashboard/CategoryBar";
import { categories } from "../constants";

const SpendingCategories = () => {
  return (
    <div className="p-8 overflow-y-scroll ">
      {categories.map(category => (
        <CategoryBar key={category.id} category={category} />
      ))}
    </div>
  );
}

export default SpendingCategories;