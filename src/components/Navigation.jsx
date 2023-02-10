import { Outlet } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import GaugeIcon from "./svgs/GaugeIcon";
import TransactionIcon from "./svgs/TransactionIcon";
import NewsIcon from "./svgs/NewsIcon";
import GearIcon from "./svgs/GearIcon";
import PowerOffIcon from "./svgs/PowerOffIcon";
import logoGreenIcon from "../assets/logo-green.png";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen pb-14 md:pb-0 md:pt-14 xl:pt-0">
      <nav className="fixed bottom-0 z-30 flex items-center justify-between w-full font-bold text-gray-400 md:bottom-auto md:top-0 md:px-8 xl:p-0 xl:block xl:py-10 xl:h-screen bg-raisin-black xl:w-80 xl:static">
        <img className="hidden h-8 md:block xl:px-10 xl:h-auto xl:mt-32" src={logoGreenIcon} alt="logo" />
        <h2 className="hidden pt-8 pb-10 mx-10 mb-10 text-3xl text-center border-b border-gray-400 xl:block">Hello, John</h2>

        <ul className="flex justify-around w-full text-xl md:justify-end xl:block md:w-auto">
          <NavLinkItem icon={<GaugeIcon isSelected={"/" === pathname} />} title="Dashboard" link="/" />

          <NavLinkItem icon={<TransactionIcon isSelected={"/transactions" === pathname} />} title="Transactions" link="/transactions" />

          <NavLinkItem icon={<NewsIcon isSelected={"/news" === pathname} />} title="News" link="/news" />

          <NavLinkItem icon={<GearIcon isSelected={"/settings" === pathname} />} title="Settings" link="/settings" />
            
          <NavLinkItem icon={<PowerOffIcon isSelected={"/signout" === pathname} />} title="Sign Out" link="/signout" />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;