import React, { useContext } from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import styles from "./styles.module.css";
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenu } from "../../interfaces/menu.unterface";
import { ETopLevelCategory } from "../../interfaces/page.interface";
import CoursesIcon from "./icons/CoursesIcon.svg";
import BooksIcon from "./icons/BooksIcon.svg";
import ServicesIcon from "./icons/ServicesIcon.svg";
import ProductsIcon from "./icons/ProductsIcon.svg";
import { IPageItem } from "../../pages";
import { CustomLink } from "../CustomLink";
import { PageItem } from "../../pages/courses/[alias]";

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
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevelOfAMenu = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((firstItemOfAMenu) => (
          <li key={firstItemOfAMenu.id}>
            <CustomLink href={`/${firstItemOfAMenu.route}`}>
              <a
                className={`${styles.menu_first_level_item} ${
                  firstItemOfAMenu.id === firstCategory
                    ? styles.menu_first_level_item__active
                    : ""
                }`}
              >
                {firstItemOfAMenu.icon}
                {firstItemOfAMenu.name}
              </a>
            </CustomLink>
            {firstItemOfAMenu.id === firstCategory && (
              <ul className={styles.menu_second_level}>
                {buildSecondLevelOfAMenu(firstItemOfAMenu.route)}
              </ul>
            )}
          </li>
        ))}
      </>
    );
  };

  const buildSecondLevelOfAMenu = (route: string): JSX.Element => {
    return (
      <>
        {menu.map((secondItemOfAMenu) => (
          <li key={secondItemOfAMenu._id.secondCategory}>
            <p className={styles.menu_second_level_item}>
              {secondItemOfAMenu._id.secondCategory}
            </p>
            {
              <ul className={styles.menu_third_level}>
                {buildThirdLevelOfAMenu(route, secondItemOfAMenu.pages)}
              </ul>
            }
          </li>
        ))}
      </>
    );
  };

  const buildThirdLevelOfAMenu = (
    route: string,
    pages: PageItem[]
  ): JSX.Element => {
    return (
      <>
        {pages.map((el) => (
          <li className={styles.menu_third_level_item} key={el._id}>
            <Link href={`${route}/${el.alias}`}>
              <a>{el.category}</a>
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu_first_level}>{buildFirstLevelOfAMenu()}</ul>
    </nav>
  );
};
