
const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col flex-grow border border-gray-300 rounded-md shadow-xl">
      <h1 className="px-8 py-4 text-3xl font-bold text-gray-700 bg-gray-200 border-b border-gray-300">{title}</h1>
      {children}
    </div>
  );
}

export default Card;