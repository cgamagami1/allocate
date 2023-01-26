import { categories } from "../constants";

const CategoryIcon = ({ category }) => {
  return (
    <img className={`w-12 h-12 p-3 ${categories[category].color} rounded-xl`} src={`./${categories[category].icon}.svg`} alt={`${category} icon`} />
  );
}

export default CategoryIcon;