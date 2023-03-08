import closeIcon from "../assets/close.svg";
import { FC } from "react";

type MenuHeaderProps = {
  title: string;
  handleCloseMenu(): void;
}

const MenuHeader: FC<MenuHeaderProps> = ({title, handleCloseMenu }) => {
  return (
    <div className="flex justify-between pb-4 border-b border-gray-300">
      <h2 className="text-xl font-bold text-center text-rasin-black">{title}</h2>
      <img className="w-4 ml-auto hover:cursor-pointer" onClick={handleCloseMenu} src={closeIcon} alt="close icon" />
    </div>
  );
}

export default MenuHeader;