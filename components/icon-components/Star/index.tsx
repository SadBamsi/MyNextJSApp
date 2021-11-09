import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.css";
import StarIcon from "../../../public/Star.svg";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isField?: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export const Star: React.FC<IProps> = ({
  isField,
  onLeave,
  onHover,
  onClick,
  ...rest
}) => {
  return (
    <span
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`${styles.star} ${isField ? styles.star_fill : ""}`}
    >
      <StarIcon />
    </span>
  );
};
