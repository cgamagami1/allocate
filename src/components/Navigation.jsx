import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleOnClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="flex h-screen">
      <div className="fixed z-10 flex justify-between w-full p-4 bg-gray-900 xl:hidden">
        <img className="h-8 hover:cursor-pointer" src={isOpen ? "./close.svg" : "./menu.svg"} alt="nav button" onClick={handleOnClick} />
        <img className="h-8" src="./logo-grey.png" alt="logo" />
      </div>
      
      <nav className={`transition-transform fixed xl:static h-screen p-10 font-bold text-gray-400 bg-raisin-black w-80 ${isOpen ? "" : "-translate-x-full" } xl:translate-x-0`}>
        <img className="hidden mt-32 xl:block" src="./logo-grey.png" alt="logo" />
        <h1 className="hidden mt-8 mb-16 text-3xl text-center xl:block">Hello, John</h1>

        <ul className="mt-16 text-3xl border-gray-400 xl:text-xl xl:border-t xl:mt-0">
          <li className="flex items-center mt-6">
            <img className="w-6 mr-4" src="./gauge.svg" alt="dashboard icon" />
            <Link className="hover:underline" to="/" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </li>
          <li className="flex items-center mt-6">
            <img className="w-6 mr-4" src="./transaction.svg" alt="transactions icon" />
            <Link className="hover:underline" to="/transactions" onClick={() => setIsOpen(false)}>Transactions</Link>
          </li>
          <li className="flex items-center mt-6">
            <img className="w-6 mr-4" src="./newspaper.svg" alt="news icon" />
            <Link className="hover:underline" to="/news" onClick={() => setIsOpen(false)}>News</Link>
          </li>
          <li className="flex items-center mt-6">
            <img className="w-6 mr-4" src="./gear.svg" alt="settings icon" />
            <Link className="hover:underline" to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
          </li>
          <li className="flex items-center my-6">
            <img className="w-6 mr-4" src="./power-off.svg" alt="sign out icon" />
            <span>Sign Out</span>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;