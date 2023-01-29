import Card from "./Card";
import { categories } from "../constants";
import checkIcon from "../assets/check.svg";

const TransactionMenu = () => {
  return (
    <Card title="Transaction">
      <div className="px-8 pb-8 bg-white">
        <label className="block my-2 font-bold text-gray-500" htmlFor="description">Description:</label>
        <input className="h-8 px-4 bg-gray-200 rounded-md" id="description" type="text" />

        <label className="block my-2 font-bold text-gray-500" htmlFor="category">Category:</label>
        <select className="h-8 px-4 bg-gray-200 rounded-md" id="category">
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>

        <label className="block my-2 font-bold text-gray-500" htmlFor="date">Date:</label>
        <input className="h-8 px-4 bg-gray-200 rounded-md" id="date" type="date" />

        <label className="block my-2 font-bold text-gray-500" htmlFor="amount">Amount:</label>
        <input className="h-8 px-4 bg-gray-200 rounded-md" id="amount" type="number" />

        <img className="h-10 px-4 py-2 mt-4 ml-auto bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800" src={checkIcon} alt="check icon" />
      </div>
    </Card>
  );
}

export default TransactionMenu;