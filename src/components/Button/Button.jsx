import css from "./Button.module.css";
import clsx from "clsx";

export const Button = ({ variant, children }) => {
  return <button className={clsx(css.btn, css[variant])}>{children}</button>;
};
