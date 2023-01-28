
const Navigation = () => {
  return (
    <nav className="p-10 font-bold text-gray-400 bg-raisin-black w-80">
      <img className="mt-32 mb-8" src="./logo-grey.png" alt="logo" />
      <h1 className="mb-16 text-3xl text-center">Hello, John</h1>
      <ul className="text-xl border-t border-gray-400">
        <li className="flex items-center mt-6">
          <img className="w-6 mr-4" src="./gauge.svg" alt="dashboard icon" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center mt-6">
          <img className="w-6 mr-4" src="./transaction.svg" alt="transactions icon" />
          <span>Transactions</span>
        </li>
        <li className="flex items-center mt-6">
          <img className="w-6 mr-4" src="./newspaper.svg" alt="news icon" />
          <span>News</span>
        </li>
        <li className="flex items-center mt-6">
          <img className="w-6 mr-4" src="./gear.svg" alt="settings icon" />
          <span>Settings</span>
        </li>
        <li className="flex items-center my-6">
          <img className="w-6 mr-4" src="./power-off.svg" alt="sign out icon" />
          <span>Sign Out</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;