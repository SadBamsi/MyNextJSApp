import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Arrow from "../../public/Arrow.svg";
import styles from "./style.module.css";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  withArrow?: boolean;
  opened?: boolean;
}

export const Button: React.FC<IProps> = ({
  children,
  primary,
  withArrow,
  opened,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles.btn} ${primary ? styles.primary : styles.ghost}`}
    >
      <span className={withArrow ? styles.btn_content : ""}>{children}</span>
      {withArrow && (
        <Arrow
          className={`${styles.arrow} ${opened ? styles.opened : ""}`}
          width={6}
          height={10}
        />
      )}
    </button>
  );
};
