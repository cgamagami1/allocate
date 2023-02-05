import closeIcon from "../assets/close.svg";
import MenuLabel from "./MenuLabel";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { BudgetContext } from "../context/BudgetContext";

const TransactionMenu = () => {
  const { setCurrentMenu } = useContext(MenuContext);
  const { categories } = useContext(BudgetContext);

  const handleCloseMenu = () => {
    setCurrentMenu("none");
  }

  const handleAddTransaction = () => {
    setCurrentMenu("none");
  }

  return (
    <div className="p-8 bg-white menu-shadow rounded-xl tilt-animation">
      <div className="flex justify-between pb-4 border-b border-gray-300">
        <h2 className="text-xl font-bold text-center text-rasin-black">Add Transaction</h2>
        <img className="w-4 ml-auto hover:cursor-pointer" onClick={handleCloseMenu} src={closeIcon} alt="close icon" />
      </div>
      
      <MenuLabel>Description:</MenuLabel>
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="description" type="text" />

      <MenuLabel>Category:</MenuLabel>
      <select className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="category">
        {categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>

      <MenuLabel>Date:</MenuLabel>
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="date" type="date" />

      <MenuLabel>Amount:</MenuLabel>
      <input className="w-20 h-8 pl-4 bg-gray-200 border border-gray-300 rounded-md" id="amount" type="number" />

      <span className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" onClick={handleAddTransaction}>Add</span>
    </div>
  );
}

export default TransactionMenu;