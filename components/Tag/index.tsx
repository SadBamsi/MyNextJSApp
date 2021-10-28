import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.module.css";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m" | "l";
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}

export const Tag: React.FC<IProps> = ({
  size = "s",
  color = "ghost",
  href,
  children,
  ...rest
}) => {
  return (
    <div className={`${styles.tag} ${styles[color]} ${styles[size]}`} {...rest}>
      {href && <a href={href}>{children}</a>}
      {!href && children}
    </div>
  );
};
