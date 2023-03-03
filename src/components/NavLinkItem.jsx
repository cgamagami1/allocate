import { Link, useLocation } from "react-router-dom";

const NavLinkItem = ({ icon, title, link }) => {
  const { pathname } = useLocation();

  return (
    <li className={`flex hover:underline items-center px-3 xl:px-10 py-3 ${pathname === link ? "text-selected md:bg-selected-background" : ""}`}>
      <Link className="flex items-center" to={link}>
        <div className="m-1 w-9 md:w-6 md:m-0">
          {icon}
        </div>
        <span className="hidden ml-4 lg:block">{title}</span>
      </Link>
    </li>
  );
}

export default NavLinkItem;