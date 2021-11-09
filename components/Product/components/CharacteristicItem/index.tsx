import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.css";
interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  description?: string;
  value?: string;
  tags?: string[];
}

export const CharacteristicItem: React.FC<IProps> = ({
  description,
  value,
  tags,
}) => {
  return (
    <li className={styles.characteristic}>
      <span className={styles.characteristic_description}>
        {description && description}
      </span>
      <span className={styles.characteristic_dots}></span>
      <span className={styles.characteristic_name}>{value && value}</span>
    </li>
  );
};
