import Transaction from "./Transaction";

const Transactions = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="shadow-lg">
        <h2 className="px-4 pt-6 pb-2 text-3xl font-bold tracking-wide">Transactions</h2>
        <span className="inline-block px-4 py-2 my-4 ml-4 font-bold text-white bg-black rounded-lg">All</span>
        <span className="inline-block px-4 py-2 my-4 ml-4 font-bold bg-gray-300 rounded-lg">Gas</span>
        <span className="inline-block px-4 py-2 m-4 font-bold bg-gray-300 rounded-lg">Groceries</span>
      </div>
      <div className="overflow-y-scroll">
        <Transaction description="Aldi" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Electric" category="Utilities" date="April 16th, 2023" amount={34} />
        <Transaction description="Housing" category="Rent" date="April 16th, 2023" amount={34} />
        <Transaction description="Aldi" category="Transportation" date="April 16th, 2023" amount={34} />
        <Transaction description="Steam game" category="Leisure" date="April 16th, 2023" amount={34} />
        <Transaction description="Whole foods" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Repairs" category="Misc" date="April 16th, 2023" amount={34} />
        <Transaction description="Repairs" category="Misc" date="April 16th, 2023" amount={34} />
        <Transaction description="Repairs" category="Misc" date="April 16th, 2023" amount={34} />
        <Transaction description="Repairs" category="Misc" date="April 16th, 2023" amount={34} />
        <Transaction description="Repairs" category="Misc" date="April 16th, 2023" amount={34} />
      </div>
    </div>
  );
}

export default Transactions;