
const CategoryFilterButton = ({ isSelected, name }) => {
  return (
    <span className={`hover:cursor-pointer inline-block box-border px-4 py-2 font-bold rounded-lg ${isSelected ? "text-green-600 bg-green-200 border border-green-600" : "text-gray-700"}`}>
      {name}
    </span>
  );
}

export default CategoryFilterButton;