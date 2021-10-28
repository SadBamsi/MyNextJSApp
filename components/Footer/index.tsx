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
      <span className={styles.copyright}>
        OwlTop © 2020 - 2021 Все права защищены
      </span>
      <div className={styles.link_block}>
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};
