import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { BudgetContext } from "../context/BudgetContext";
import MenuHeader from "./MenuHeader";
import MenuLabel from "./MenuLabel";
import IconSelector from "./IconSelector";

const CategoryMenu = () => {
  const { setCurrentMenu, editedItem, setEditedItem, isEditing } = useContext(MenuContext);
  const { addCategory, editCategory } = useContext(BudgetContext);
  
  const [name, setName] = useState(editedItem?.name ?? "");
  const [icon, setIcon] = useState();
  const [color, setColor] = useState();
  const [budget, setBudget] = useState(editedItem?.budget ?? 0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      addCategory({
        name,
        icon,
        color,
        budget,
      });
      setCurrentMenu("none");
    }
    else {
      editCategory({
        ...editedItem,
        name,
        icon,
        color,
        budget,
      });
      setEditedItem(null);
      setCurrentMenu("none");
    }
  }

  const handleCloseMenu = () => {
    setEditedItem(null);
    setCurrentMenu("none")
  }

  const handleOnNameChange = (e) => setName(e.target.value);
  const handleOnIconChange = (e) => setIcon(e.target.value);
  const handleOnColorChange = (e) => setColor(e.target.value);
  const handleOnBudgetChange = (e) => setBudget(e.target.value);

  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation" onSubmit={handleOnSubmit}>
      <MenuHeader isEditing={isEditing} handleCloseMenu={handleCloseMenu} menuName="Category" />

      <MenuLabel title="Name:" />
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="name" type="text" value={name} onChange={handleOnNameChange} required />

      <IconSelector />

      <MenuLabel title="Budget:" />
      <span className="text-lg font-semibold text-gray-500">$ </span>
      <input className="w-24 h-8 pl-1 bg-gray-200 border border-gray-300 rounded-md" id="budget" type="number" min={0} value={budget} onChange={handleOnBudgetChange} />

      <input className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" 
        type="submit" value={isEditing ? "Edit" : "Add"} />
    </form>
  );
}

export default CategoryMenu;