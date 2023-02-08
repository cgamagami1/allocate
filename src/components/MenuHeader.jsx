import closeIcon from "../assets/close.svg";

const MenuHeader = ({ isEditing, handleCloseMenu, menuName }) => {
  return (
    <div className="flex justify-between pb-4 border-b border-gray-300">
      <h2 className="text-xl font-bold text-center text-rasin-black">{isEditing ? "Edit" : "Add"} {menuName}</h2>
      <img className="w-4 ml-auto hover:cursor-pointer" onClick={handleCloseMenu} src={closeIcon} alt="close icon" />
    </div>
  );
}

export default MenuHeader;