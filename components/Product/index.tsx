import styles from "./styles.module.css";

interface IProps {}

export const Product: React.FC<IProps> = () => {
  return (
    <div className={styles.product}>
      <header className={styles.product_header}></header>
    </div>
  );
};
