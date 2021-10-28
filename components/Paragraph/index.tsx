import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
}

export const Paragraph: React.FC<IProps> = ({ size = "s", children }) => {
  return <p className={`${styles.paragraph} ${styles[size]}`}>{children}</p>;
};
