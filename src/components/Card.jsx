
const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col flex-grow border border-gray-300 xl:rounded-md xl:shadow-xl">
      <h1 className="px-8 py-2 text-2xl font-bold text-gray-700 bg-gray-200 border-b border-gray-300 xl:py-4 xl:text-3xl">{title}</h1>
      {children}
    </div>
  );
}

export default Card;