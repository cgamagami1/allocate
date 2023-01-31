import { Link } from "react-router-dom";

const NavLinkItem = ({ icon, title, link }) => {
  return (
    <li className="flex items-center mt-6">
      <img className="w-6 mr-4" src={icon} alt={`${title} icon`} />
      <Link className="hover:underline" to={link}>{title}</Link>
    </li>
  );
}

export default NavLinkItem;