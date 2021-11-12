import {
  DetailedHTMLProps,
  HTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import styles from "./styles.module.css";

interface ITextaAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const TextaArea: React.FC<ITextaAreaProps> = ({
  className,
  ...rest
}) => {
  return (
    <textarea
      className={`${styles.textarea} ${className ? className : ""}`}
      {...rest}
    />
  );
};
