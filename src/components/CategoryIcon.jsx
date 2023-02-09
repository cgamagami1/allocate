import question from "../assets/question.svg";

const CategoryIcon = ({ category }) => {

  return (
    <img className="w-12 h-12 p-3 rounded-xl" src={category.icon} alt={`${category.name} icon`} style={{backgroundColor: category.color}} />
  );
}

export default CategoryIcon;