import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const menuItems = [
    {
      id: 1,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "ABOUT",
      path: "/about",
    },
  ];

  return (
    <nav className="menu">
      {menuItems.map((menu) => (
        <NavLink key={menu.id} to={menu.path} className="menu-link">
          {menu.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
