import CategoryBar from "../pages/Dashboard/CategoryBar";
import { categories } from "../constants";
import Card from "./Card";

const Spending = () => {
  return (
    <Card title="Spending">
      <div className="px-8 py-4 overflow-y-scroll ">
        {categories.map(category => (
          <CategoryBar key={category.id} category={category} />
        ))}
      </div>
    </Card>
  );
}

export default Spending;