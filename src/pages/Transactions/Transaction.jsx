import CategoryIcon from "../../components/CategoryIcon";
import { categories } from "../../constants";

const Transaction = ({ transaction }) => {
  const { description, categoryName, date, amount } = transaction;

  return (
    <>
    <div>
      <h2 className="border-t border-b border-gray-300 px-8 py-0.5 bg-gray-100">{date}</h2>
      <div className="flex items-center justify-between h-20 px-8 py-2 m-auto">
        <div className="flex items-center">
          <CategoryIcon category={categories.find(category => category.name === categoryName)} />
          <div className="flex flex-col ml-8">
            <span className="text-xl font-bold">{description}</span>
            <span className="text-gray-500 ">{categoryName}</span>
          </div>
        </div>
        <span className="text-3xl font-light">-${amount}</span>
      </div>
    </div>
    </>
  );
}

export default Transaction;