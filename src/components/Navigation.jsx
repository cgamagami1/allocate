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
    <div className="flex h-screen pb-14 md:pb-0 md:pt-14 xl:pt-0">
      <nav className="fixed bottom-0 z-30 flex items-center justify-between w-full font-bold text-gray-400 md:bottom-auto md:top-0 md:px-8 xl:p-0 xl:block xl:py-10 xl:h-screen bg-raisin-black xl:w-80 xl:static">
        <img className="hidden h-8 md:block xl:px-10 xl:h-auto xl:mt-32" src={logoGreyIcon} alt="logo" />
        <h2 className="hidden pt-8 pb-10 mx-10 mb-10 text-3xl text-center border-b border-gray-400 xl:block">Hello, John</h2>

        <ul className="flex justify-around w-full text-xl md:justify-end xl:block md:w-auto">
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