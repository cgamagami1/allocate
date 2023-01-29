import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import gaugeIcon from "../assets/gauge.svg";
import gearIcon from "../assets/gear.svg";
import newspaperIcon from "../assets/newspaper.svg";
import powerOffIcon from "../assets/power-off.svg";
import transactionIcon from "../assets/transaction.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import logoGreyIcon from "../assets/logo-grey.png";

const Navigation = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleOnClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="flex h-screen">
      <div className="fixed z-10 flex justify-between w-full p-4 bg-gray-900 xl:hidden">
        <img className="h-6 cursor-pointer" src={isOpen ? closeIcon : menuIcon} alt="nav button" onClick={handleOnClick} />
        <img className="h-6" src={logoGreyIcon} alt="logo" />
      </div>
      <nav className={`transition-transform fixed xl:static h-screen p-10 font-bold text-gray-400 bg-raisin-black w-80 ${isOpen ? "" : "-translate-x-full" } xl:translate-x-0`}>
        <img className="hidden mt-32 xl:block" src={logoGreyIcon} alt="logo" />
        <h1 className="hidden mt-8 mb-16 text-3xl text-center xl:block">Hello, John</h1>

        <ul className="mt-16 text-3xl border-gray-400 xl:text-xl xl:border-t xl:mt-0">
          <NavLinkItem icon={gaugeIcon} title="Dashboard" link="/" setIsOpen={setIsOpen} />
          <NavLinkItem icon={transactionIcon} title="Transactions" link="/transactions" setIsOpen={setIsOpen} />
          <NavLinkItem icon={newspaperIcon} title="News" link="/news" setIsOpen={setIsOpen} />
          <NavLinkItem icon={gearIcon} title="Settings" link="/settings" setIsOpen={setIsOpen} />
          <NavLinkItem icon={powerOffIcon} title="Sign Out" link="/signout" setIsOpen={setIsOpen} />
        </ul>
      </nav>
      <div className="flex-grow xl:flex xl:justify-between xl:gap-16 xl:p-16 mt-14 xl:mt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;