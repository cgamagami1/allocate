
const CategoryIcon = ({ category }) => {
  const { name, color, icon } = category;

  return (
    <img className={`w-12 h-12 p-3 ${color} rounded-xl`} src={`./${icon}.svg`} alt={`${name} icon`} />
  );
}

export default CategoryIcon;