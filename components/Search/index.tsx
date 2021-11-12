import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Input } from "../Input";
import styles from "./styles.module.css";
import SearchIcon from "./Search.svg";
import { useRouter } from "next/router";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search: React.FC<IProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handlerKeyDown = (e: any) => {
    if (e.key === "Enter") goToSearch();
  };

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: inputValue,
      },
    });
  };

  return (
    <div className={styles["search-area"]}>
      <Input
        placeholder="Поиск..."
        className={styles["search-area_input"]}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handlerKeyDown}
      />
      <button className={styles["search-area_button"]} onClick={goToSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};
