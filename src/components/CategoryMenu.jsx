import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { BudgetContext } from "../context/BudgetContext";
import MenuHeader from "./MenuHeader";
import MenuLabel from "./MenuLabel";
import { colors, icons } from "../constants";

const CategoryMenu = () => {
  const { setCurrentMenu, editedItem, setEditedItem, isEditing } = useContext(MenuContext);
  const { addCategory, editCategory } = useContext(BudgetContext);
  
  const [name, setName] = useState(editedItem?.name ?? "");
  const [selectedColor, setSelectedColor] = useState(editedItem?.color ?? colors[0].color);
  const [selectedIcon, setSelectedIcon] = useState(editedItem?.icon ?? icons[0].icon);
  const [budget, setBudget] = useState(editedItem?.budget ?? 0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      addCategory({
        name,
        icon: selectedIcon,
        color: selectedColor,
        budget,
      });
      setCurrentMenu("none");
    }
    else {
      editCategory({
        ...editedItem,
        name,
        icon: selectedIcon,
        color: selectedColor,
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
  const handleOnBudgetChange = (e) => setBudget(e.target.value);

  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation" onSubmit={handleOnSubmit}>
      <MenuHeader isEditing={isEditing} handleCloseMenu={handleCloseMenu} menuName="Category" />

      <MenuLabel title="Name:" />
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="name" type="text" value={name} onChange={handleOnNameChange} required />

      <MenuLabel title="Color:" />    
      <div className="flex flex-wrap w-64 gap-3">
        {colors.map(({ id, color }) => (
          <div key={id} className={`w-8 h-8 hover:cursor-pointer rounded-md box-border border-black ${color === selectedColor ? "border-2" : ""}`} 
            style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)}></div>
        ))}
      </div>

      <MenuLabel title="Icon:" />
      <div className="flex flex-wrap w-64 gap-3">
        {icons.map(({ id, icon, alt }) => (
          <div key={id} className={`grid hover:cursor-pointer items-center justify-center w-8 h-8 rounded-md border-black ${icon === selectedIcon ? "border-2" : ""}`} 
            style={{ backgroundColor: selectedColor }} onClick={() => setSelectedIcon(icon)}>
            <img src={icon} alt={alt} className="w-4 h-4"></img>
          </div>
        ))}
      </div>

      <MenuLabel title="Budget:" />
      <span className="text-lg font-semibold text-gray-500">$ </span>
      <input className="w-24 h-8 pl-1 bg-gray-200 border border-gray-300 rounded-md" id="budget" type="number" min={0} value={budget} onChange={handleOnBudgetChange} />

      <input className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" 
        type="submit" value={isEditing ? "Edit" : "Add"} />
    </form>
  );
}

export default CategoryMenu;