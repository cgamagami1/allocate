import CategoryIcon from "../../components/CategoryIcon";
import { categories } from "../../constants";

const Transaction = ({ transaction }) => {
  const { description, categoryId, date, amount } = transaction;
  const category = categories.find(category => category.id === categoryId);

  return (
    <>
    <div className="py-4 border-t border-gray-300">
      <span className="block mb-2 font-bold text-gray-500">{date}</span>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <CategoryIcon category={category} />

          <div className="flex flex-col justify-between ml-8">
            <h2 className="text-xl font-bold">{description}</h2>

            <span className="text-gray-500 ">{category.name}</span>
          </div>
        </div>
        
        <span className="text-3xl font-light text-gray-700">-${amount}</span>
      </div>
    </div>
    </>
  );
}

export default Transaction;