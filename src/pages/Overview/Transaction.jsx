
//will eventually retrieve with context
const categories = {};

const Transaction = ({ description, category, date, amount }) => {
  return (
    <>
    <div>
      <h2 className="border-t border-b border-gray-300 px-8 py-0.5 bg-gray-100">{date}</h2>
      <div className="m-auto flex justify-between py-2 px-8 items-center h-20">
        <div className="flex items-center">
          <img className="bg-red-400 w-12 h-12 p-3 rounded-xl" src={"./car.svg"} alt={`${category} icon`} />
          <div className="flex flex-col ml-8">
            <span className="font-bold text-xl">{description}</span>
            <span className=" text-gray-500">{category}</span>
          </div>
        </div>
        <span className="text-3xl font-light">-${amount}</span>
      </div>
    </div>
    </>
  );
}

export default Transaction;