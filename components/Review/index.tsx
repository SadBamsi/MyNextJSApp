import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { IReviewModel } from "../../interfaces/producnt.interface";
import styles from "./styles.module.css";
import UserLogoIcon from "./userLogo.svg";
import { format } from "date-fns";
import { Rating } from "../Rating";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened?: boolean;
  person: IReviewModel;
}

export const Review: React.FC<IProps> = ({ isOpened, person, children }) => {
  return (
    <div className={`${styles.review} ${isOpened ? styles.opened : ""}`}>
      <header className={styles.header}>
        <UserLogoIcon className={styles.logo} />
        <h4 className={styles.name}>{person.name}:</h4>
        <span className={styles.title}>{person.title}</span>
        <span className={styles.date}>
          {format(new Date(2016, 0, 1), "dd MMMM yyyy")}
        </span>
        <Rating rating={person.rating} />
      </header>
      <div className={styles.body}>{person.description}</div>
    </div>
  );
};
``;
