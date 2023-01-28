import CategoryBar from "./CategoryBar";
import { categories } from "../../constants";
import Card from "../../components/Card";

const Spending = () => {
  return (
    <Card title="Spending">
      <div className="px-8 overflow-y-scroll ">
        {categories.map(category => (
          <CategoryBar key={category.id} category={category} />
        ))}
      </div>
    </Card>
  );
}

export default Spending;