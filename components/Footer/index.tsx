import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Footer: React.FC<IProps> = ({
  className: propsClassName,
  ...props
}) => {
  return (
    <footer {...props} className={`${styles.footer} ${propsClassName}`}>
      <div className={styles.copyright}>
        OwlTop © 2020 - {new Date().getFullYear()} Все права защищены
      </div>
      <a className={styles.link} href="#">
        Пользовательское соглашение
      </a>
      <a className={styles.link} href="#">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
