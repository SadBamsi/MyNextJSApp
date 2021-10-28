import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Arrow } from "../Arrow";
import styles from "./style.module.css";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  withArrow?: boolean;
}

export const Button: React.FC<IProps> = ({
  children,
  primary,
  withArrow,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles.btn} ${primary ? styles.primary : styles.ghost}`}
    >
      <span className={withArrow ? styles.btn_content : ""}>{children}</span>
      {withArrow && <Arrow width={6} height={10} />}
    </button>
  );
};
