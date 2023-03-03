
const Button = ({ title, isSubmit }) => {
  return (
    <button className="text-white bg-green-500 text-2xl h-16 overflow-hidden p-4 rounded-md hover:button-hover-animation z-10" type={isSubmit ? "submit" : ""}>
      <span className="z-20">{title}</span>
    </button>
  );
}

export default Button;