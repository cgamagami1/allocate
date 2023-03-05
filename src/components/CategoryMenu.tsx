import { useContext, useState, FC, ChangeEvent, FormEvent } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import { BudgetContext, Category } from "../context/BudgetContext";
import MenuHeader from "./MenuHeader";
import MenuLabel from "./MenuLabel";
import { colors, icons } from "../constants";

const CategoryMenu: FC = () => {

  const defaultCategoryFormData: Category = {
    id: -1,
    name: "",
    icon: icons[0].icon,
    color: colors[0].color,
    budget: 0
  }

  const { setMenuStatus, editedItem, setEditedItem, isEditing } = useContext(MenuContext);
  const { addCategory, editCategory } = useContext(BudgetContext);
  const [categoryFormData, setCategoryFormData] = useState<Category>((editedItem !== null && "budget" in editedItem) ? { ...editedItem } : defaultCategoryFormData);
  const { name, icon, color, budget } = categoryFormData;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isEditing) {
      addCategory(categoryFormData);
      setMenuStatus(MENU_STATUS.NONE);
    }
    else {
      editCategory(categoryFormData);
      setEditedItem(null);
      setMenuStatus(MENU_STATUS.NONE);
    }
  }

  const handleCloseMenu = (): void => {
    setEditedItem(null);
    setMenuStatus(MENU_STATUS.NONE);
  }


  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>): void => setCategoryFormData({ ...categoryFormData, name: e.target.value });

  const handleOnBudgetChange = (e: ChangeEvent<HTMLInputElement>): void => setCategoryFormData({ ...categoryFormData, budget: Number(e.target.value) });

  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation" onSubmit={handleOnSubmit}>
      <MenuHeader isEditing={isEditing} handleCloseMenu={handleCloseMenu} menuName="Category" />

      <MenuLabel title="Name:" htmlFor="name" />
      <input className="h-8 px-4 bg-gray-200 border border-gray-300 rounded-md" id="name" type="text" value={name} onChange={handleOnNameChange} required />

      <MenuLabel title="Color:" />    
      <div className="flex flex-wrap w-64 gap-3">
        {colors.map(({ id, color: currentColor }) => (
          <div key={id} className={`w-8 h-8 hover:cursor-pointer rounded-md box-border border-black ${color === currentColor ? "border-2" : ""}`} 
            style={{ backgroundColor: currentColor }} onClick={() => setCategoryFormData({ ...categoryFormData, color: currentColor })}></div>
        ))}
      </div>

      <MenuLabel title="Icon:" />
      <div className="flex flex-wrap w-64 gap-3">
        {icons.map(({ id, icon: currentIcon, alt }) => (
          <div key={id} className={`grid hover:cursor-pointer items-center justify-center w-8 h-8 rounded-md border-black ${icon === currentIcon ? "border-2" : ""}`} 
            style={{ backgroundColor: color }} onClick={() => setCategoryFormData({ ...categoryFormData, icon: currentIcon})}>
            <img src={currentIcon} alt={alt} className="w-4 h-4"></img>
          </div>
        ))}
      </div>

      <MenuLabel title="Budget:" htmlFor="" />
      <span className="text-lg font-semibold text-gray-500">$ </span>
      <input className="w-24 h-8 pl-1 bg-gray-200 border border-gray-300 rounded-md" id="budget" type="number" min={0} value={budget} onChange={handleOnBudgetChange} />

      <input className="block w-16 p-2 mt-4 ml-auto text-center text-white bg-green-500 rounded-lg hover:bg-green-600 hover:cursor-pointer" type="submit" value={isEditing ? "Edit" : "Add"} />
    </form>
  );
}

export default CategoryMenu;