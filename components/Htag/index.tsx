import styles from "./style.module.css";

interface IProps {
  tag: "h1" | "h2" | "h3";
  className?: string;
}

export const Htag: React.FC<IProps> = ({ tag, children, className }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={`${styles[tag]} ${className ? className : ""}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles[tag]} ${className ? className : ""}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${styles[tag]} ${className ? className : ""}`}>
          {children}
        </h3>
      );
  }
};
