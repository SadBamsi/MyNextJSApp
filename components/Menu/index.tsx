import React, { useContext } from "react";
import styles from "./styles.module.css";
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenu } from "../../interfaces/menu.unterface";
import { ETopLevelCategory } from "../../interfaces/page.interface";
import CoursesIcon from "./icons/CoursesIcon.svg";
import BooksIcon from "./icons/BooksIcon.svg";
import ServicesIcon from "./icons/ServicesIcon.svg";
import ProductsIcon from "./icons/ProductsIcon.svg";

const firstLevelMenu: IFirstLevelMenu[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: ETopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: ETopLevelCategory.Serveces,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: ETopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: ETopLevelCategory.Products,
  },
];

export const Menu: React.FC = () => {
  const { menu, firstCategory } = useContext(AppContext);

  return (
    <nav>
      <ul className={styles.menu}>
        {firstLevelMenu.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </nav>
  );
};
