import { Outlet } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import GaugeIcon from "./svgs/GaugeIcon";
import TransactionIcon from "./svgs/TransactionIcon";
import NewsIcon from "./svgs/NewsIcon";
import GearIcon from "./svgs/GearIcon";
import PowerOffIcon from "./svgs/PowerOffIcon";
import logoGreyIcon from "../assets/logo-grey.png";
import { useState } from "react";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <nav className="h-screen py-10 font-bold text-gray-400 xl:static bg-raisin-black w-80">
        <img className="hidden px-10 mt-32 xl:block" src={logoGreyIcon} alt="logo" />
        <h2 className="hidden pt-8 pb-10 mx-10 mb-10 text-3xl text-center border-b border-gray-400 xl:block">Hello, John</h2>

        <ul className="text-xl">
          <NavLinkItem icon={<GaugeIcon isSelected={"dashboard" === selectedItem} />} 
            title="Dashboard" link="/" isSelected={"dashboard" === selectedItem} handleOnClick={() => setSelectedItem("dashboard")} />

          <NavLinkItem icon={<TransactionIcon isSelected={"transactions" === selectedItem} />} 
            title="Transactions" link="/transactions" isSelected={"transactions" === selectedItem} handleOnClick={() => setSelectedItem("transactions")} />

          <NavLinkItem icon={<NewsIcon isSelected={"news" === selectedItem} />} 
            title="News" link="/news" isSelected={"news" === selectedItem} handleOnClick={() => setSelectedItem("news")} />

          <NavLinkItem icon={<GearIcon isSelected={"settings" === selectedItem} />} 
            title="Settings" link="/settings" isSelected={"settings" === selectedItem} handleOnClick={() => setSelectedItem("settings")} />
            
          <NavLinkItem icon={<PowerOffIcon isSelected={"sign out" === selectedItem} />} 
            title="Sign Out" link="/signout" isSelected={"sign out" === selectedItem} handleOnClick={() => setSelectedItem("sign out")} />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;