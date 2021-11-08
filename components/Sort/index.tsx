import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";
import SortIcon from "./icons/Sort.svg";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

export const Sort: React.FC<IProps> = ({ children, className, isActive }) => {
  return (
    <button
      className={`${styles.sort} ${className ? className : ""} ${
        isActive ? styles.sort__active : ""
      }`}
    >
      {isActive && <SortIcon />}
      {children}
    </button>
  );
};
