
//will eventually retrieve with context
const categories = {
  Groceries: {
    icon: "./shopping-cart.svg",
    color: "#FFFFFF"
  },
};

const Transaction = ({ description, category, date, amount }) => {
  return (
    <>
    <div>
      <h2 className="border-t border-b border-gray-300 px-8 py-0.5 bg-gray-100">{date}</h2>
      <div className="flex items-center justify-between h-20 px-8 py-2 m-auto">
        <div className="flex items-center">
          <img className="w-12 h-12 p-3 bg-red-400 rounded-xl" src={"./car.svg"} alt={`${category} icon`} />
          <div className="flex flex-col ml-8">
            <span className="text-xl font-bold">{description}</span>
            <span className="text-gray-500 ">{category}</span>
          </div>
        </div>
        <span className="text-3xl font-light">-${amount}</span>
      </div>
    </div>
    </>
  );
}

export default Transaction;