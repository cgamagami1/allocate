import closeIcon from "../assets/close.svg";
import MenuLabel from "./MenuLabel";
import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { BudgetContext } from "../context/BudgetContext";
import { DateTime } from "luxon";

const TransactionMenu = () => {
  const { setCurrentMenu, editedItem, setEditedItem } = useContext(MenuContext);
  const { categories, addTransaction, editTransaction } = useContext(BudgetContext);

  const [description, setDescription] = useState(editedItem?.description ?? "");
  const [categoryId, setCategoryId] = useState(editedItem?.categoryId ?? categories[0].id);
  const [date, setDate] = useState(editedItem?.date ?? DateTime.now());
  const [amount, setAmount] = useState(editedItem?.amount ?? 0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if (editedItem ?? true) {
      addTransaction({
        description,
        categoryId,
        date,
        amount,
      });
      setCurrentMenu("none");
    }
    else {
      editTransaction({
        ...editedItem,
        description,
        categoryId,
        date,
        amount,
      });
      setEditedItem(null);
      setCurrentMenu("none");
    }
  }
  
  const handleCloseMenu = () => {
    setEditedItem(null);
    setCurrentMenu("none")
  };
  
  const handleOnDescriptionChange = (e) => setDescription(e.target.value);
  const handleOnCategoryChange = (e) => setCategoryId(Number(e.target.value));
  const handleOnDateChange = (e) => setDate(DateTime.fromISO(e.target.value));
  const handleOnAmountChange = (e) => setAmount(Number(e.target.value));
  
  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation" onSubmit={handleOnSubmit}>
      <div className="flex justify-between pb-4 border-b border-gray-300">
        <h2 className="text-xl font-bold text-center text-rasin-black">Add Transaction</h2>
        <img className="w-4 ml-auto hover:cursor-pointer" onClick={handleCloseMenu} src={closeIcon} alt="close icon" />
      </div>
      
      <MenuLabel title="Description:" />
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="description" type="text" value={description} onChange={handleOnDescriptionChange} required />

      <MenuLabel title="Category:" />
      <select className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="category" value={categoryId} onChange={handleOnCategoryChange}>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select>

      <MenuLabel title="Date:" />
      <input className="h-8 pl-4 pr-2 bg-gray-200 border border-gray-300 rounded-md" id="date" type="date" value={date.toISODate()} onChange={handleOnDateChange} required />

      <MenuLabel title="Amount:" />
      <span className="text-lg font-semibold text-gray-500">-$ </span>
      <input className="w-24 h-8 pl-1 bg-gray-200 border border-gray-300 rounded-md" id="amount" type="number" min={0} value={amount} onChange={handleOnAmountChange} />

      <input className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" type="submit" value="Add" />
    </form>
  );
}

export default TransactionMenu;