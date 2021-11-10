import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";
import SortIcon from "./icons/Sort.svg";
import { Input } from "../Input";

export enum ESort {
  Rating,
  Price,
}

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  sort: ESort;
  setSort: (sort: ESort) => void;
}

export const Sort: React.FC<IProps> = ({ sort, setSort, ...rest }) => {
  console.log(sort === ESort.Rating);

  return (
    <div className={styles.sort_area}>
      <button
        onClick={() => setSort(ESort.Rating)}
        className={`${styles.sort}  ${
          sort === ESort.Rating ? styles.sort__active : ""
        }`}
        {...rest}
      >
        {sort === ESort.Rating && <SortIcon />}
        По рейтингу
      </button>
      <button
        className={`${styles.sort}  ${
          sort === ESort.Price ? styles.sort__active : ""
        }`}
        {...rest}
        onClick={() => setSort(ESort.Price)}
      >
        {sort === ESort.Price && <SortIcon />}
        По цене
      </button>
      <Input />
    </div>
  );
};
