
const CategoryIcon = ({ category }) => {
  const { name, color, icon } = category;

  return (
    <img className="w-12 h-12 p-3 rounded-xl" src={`./${icon}.svg`} alt={`${name} icon`} style={{backgroundColor: color}} />
  );
}

export default CategoryIcon;