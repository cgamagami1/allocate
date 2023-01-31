
const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col flex-grow">
      <h1 className="px-8 py-2 text-3xl font-bold bg-white shadow-md text-raisin-black xl:py-4">{title}</h1>
      {children}
    </div>
  );
}

export default Card;