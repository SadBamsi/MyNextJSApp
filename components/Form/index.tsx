import React, {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
} from "react";
import { Input } from "../Input";
import { Rating } from "../Rating";
import { TextaArea } from "../Textarea";
import styles from "./styles.module.css";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <form {...rest} className={`${styles.form} ${className ? className : ""}`}>
      <Input placeholder="Имя" />
      <Input placeholder="Заголовок отзыва" />
      <span className={styles.note}>Оценка:</span>
      <Rating rating={0} isEditable={true} />
      <TextaArea placeholder="Текст отзыва" className={styles.textarea} />
    </form>
  );
};
