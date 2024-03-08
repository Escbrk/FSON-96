import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      <NavLink to="payments" className={makeLinkClass}>
        Payments
      </NavLink>
    </nav>
  );
};

export default Navigation;
