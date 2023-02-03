import { Link } from "react-router-dom";

const NavLinkItem = ({ icon, title, link, isSelected, handleOnClick }) => {
  return (
    <li className={`flex items-center px-10 py-3 ${isSelected ? "text-selected bg-selected-background" : ""}`}>
      {icon}
      <Link className="ml-4 hover:underline" to={link} onClick={handleOnClick}>{title}</Link>
    </li>
  );
}

export default NavLinkItem;