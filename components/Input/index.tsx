import styles from "./styles.module.css";

interface IProps {}

export const Input: React.FC = () => {
  return <input type="text" className={`${styles.input}`} />;
};
