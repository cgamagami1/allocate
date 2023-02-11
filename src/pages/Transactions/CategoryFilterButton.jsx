
const CategoryFilterButton = ({ isSelected, name, handleOnClick }) => {
  return (
    <span 
      className={`transition-colors select-none duration-200 hover:cursor-pointer inline-block box-border px-4 py-2 font-bold rounded-lg ${isSelected ? "text-green-600 bg-green-200 border border-green-600" : "text-gray-700"}`}
      onClick={handleOnClick}>
      {name}
    </span>
  );
}

export default CategoryFilterButton;