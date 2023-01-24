import Transaction from "./Transaction";

const Transactions = () => {
  return (
    <div>
      <h2 className="py-2 px-4 text-3xl font-light tracking-wide bg-gray-200 border-gray-400 border-b">Transactions</h2>
      <span className="bg-gray-300 py-2 px-4 my-4 ml-4 rounded-lg inline-block font-bold">All</span>
      <span className="bg-gray-300 py-2 px-4 my-4 ml-4 rounded-lg inline-block font-bold">Gas</span>
      <span className="bg-gray-300 py-2 px-4 m-4 rounded-lg inline-block font-bold">Groceries</span>
      <div>
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Walmart" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Target" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Red Robin" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
        <Transaction description="Chili's" category="Groceries" date="April 16th, 2023" amount={34} />
      </div>
    </div>
  );
}

export default Transactions;