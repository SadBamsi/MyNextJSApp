import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "../Menu";
import styles from "./styles.module.css";
import Logo from "../../layout/Logo.svg";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Sidebar: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <aside
      {...props}
      className={`${styles.sidebar} ${className ? className : ""}`}
    >
      <Logo className={styles.logo} />
      <input type="search" name="search" id="search" />
      <Menu />
    </aside>
  );
};
