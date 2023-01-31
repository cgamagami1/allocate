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
import logoGreenIcon from "../assets/logo-green.png";

const Navigation = () => {
  return (
    <div className="flex h-screen">
      <nav className="h-screen p-10 font-bold text-gray-400 xl:static bg-raisin-black w-80">
        <img className="hidden mt-32 xl:block" src={logoGreyIcon} alt="logo" />
        <h2 className="hidden mt-8 mb-16 text-3xl text-center xl:block">Hello, John</h2>

        <ul className="mt-16 text-3xl border-gray-400 xl:text-xl xl:border-t xl:mt-0">
          <NavLinkItem icon={gaugeIcon} title="Dashboard" link="/" />
          <NavLinkItem icon={transactionIcon} title="Transactions" link="/transactions" />
          <NavLinkItem icon={newspaperIcon} title="News" link="/news" />
          <NavLinkItem icon={gearIcon} title="Settings" link="/settings" />
          <NavLinkItem icon={powerOffIcon} title="Sign Out" link="/signout" />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;