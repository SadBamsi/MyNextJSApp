import React from "react";
import { IProductModel } from "../../interfaces/producnt.interface";
import { Htag } from "../Htag";
import styles from "./styles.module.css";

interface IProps {
  isPositive?: boolean;
}

export const Advantage: React.FC<IProps> = ({
  isPositive = true,
  children,
}) => {
  return (
    <div
      className={`${styles.advantage} ${
        !isPositive && styles.advatage__negative
      }`}
    >
      <Htag tag="h3">{isPositive ? "Преимущества" : "Недостатки"}</Htag>
      <span>{children}</span>
    </div>
  );
};
