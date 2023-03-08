import MenuLabel from "./MenuLabel";
import { FormEvent, useContext, useState, ChangeEvent } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import { BudgetContext } from "../context/BudgetContext";
import MenuHeader from "./MenuHeader";
import { DateTime } from "luxon";
import { Transaction } from "../context/BudgetContext";

const TransactionMenu = () => {
  const { setMenuStatus, editedItem, setEditedItem, isEditing } = useContext(MenuContext);
  const { categories, addTransaction, editTransaction } = useContext(BudgetContext);

  const defaultTransactionFormData: Transaction = {
    id: -1,
    description: "",
    categoryId: -1,
    date: DateTime.now().toISO(),
    amount: 0
  }

  const [transactionFormData, setTransactionFormData] = useState((editedItem !== null && "amount" in editedItem) ? { ...editedItem } : defaultTransactionFormData);
  const { description, categoryId, date, amount } = transactionFormData;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isEditing) {
      addTransaction(transactionFormData);
      setMenuStatus(MENU_STATUS.NONE);
    }
    else {
      editTransaction(transactionFormData);
      setEditedItem(null);
      setMenuStatus(MENU_STATUS.NONE);
    }
  }
  
  const handleCloseMenu = (): void => {
    setEditedItem(null);
    setMenuStatus(MENU_STATUS.NONE);
  }
  
  const handleOnDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => setTransactionFormData({ ...transactionFormData, description: e.target.value });

  const handleOnCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void => setTransactionFormData({ ...transactionFormData, categoryId: Number(e.target.value) });

  const handleOnDateChange = (e: ChangeEvent<HTMLInputElement>): void => setTransactionFormData({ ...transactionFormData, date: e.target.value });

  const handleOnAmountChange = (e: ChangeEvent<HTMLInputElement>): void => setTransactionFormData({ ...transactionFormData, amount: Number(e.target.value) });
  
  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation" onSubmit={handleOnSubmit}>
      <MenuHeader title={`${isEditing ? "Edit" : "Add"} Transaction`} handleCloseMenu={handleCloseMenu} />
      
      <MenuLabel title="Description:" htmlFor="description" />
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none" id="description" type="text" value={description} onChange={handleOnDescriptionChange} required />

      <MenuLabel title="Category:" htmlFor="categoryId" />
      <select className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none" id="categoryId" value={categoryId} onChange={handleOnCategoryChange}>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select>

      <MenuLabel title="Date:" htmlFor="date" />
      <input className="h-8 pl-4 pr-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none" id="date" type="date" value={DateTime.fromISO(date).toISODate()} onChange={handleOnDateChange} required />

      <MenuLabel title="Amount:" htmlFor="amount" />
      <span className="text-lg font-semibold text-gray-500">-$ </span>
      <input className="w-24 h-8 pl-1 bg-gray-200 border border-gray-300 rounded-md focus:outline-none" id="amount" type="number" min={0} value={amount} onChange={handleOnAmountChange} />

      <input className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" type="submit" value={isEditing ? "Edit" : "Add"} required />
    </form>
  );
}

export default TransactionMenu;