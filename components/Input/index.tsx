import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  KeyboardEventHandler,
  TextareaHTMLAttributes,
} from "react";
import styles from "./styles.module.css";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<IInputProps> = ({
  className,
  children,

  ...rest
}) => {
  return (
    <input
      type="text"
      className={`${styles.input} ${className ? className : ""}`}
      {...rest}
    />
  );
};
