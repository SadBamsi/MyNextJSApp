import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { AppContext } from "../../context/app.context";

import { CustomLink } from "../CustomLink";
import { IPageItem } from "../../pages/[route]/[alias]";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu: React.FC = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const { asPath, query } = useRouter();

  const changeCategory = () => {};

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
        {menu.map((secondItemOfAMenu) => {
          if (
            secondItemOfAMenu.pages
              .map((p) => p.alias)
              .includes(String(query.alias))
          ) {
            secondItemOfAMenu.isOpen = true;
          }
          return (
            <li key={secondItemOfAMenu._id.secondCategory}>
              <p
                className={`${styles.menu_second_level_item}`}
                onClick={() => {
                  setMenu &&
                    setMenu(
                      menu.map((menuItem) => {
                        if (
                          secondItemOfAMenu._id.secondCategory ===
                          menuItem._id.secondCategory
                        ) {
                          menuItem.isOpen = !menuItem.isOpen;
                        }
                        return menuItem;
                      })
                    );
                }}
              >
                {secondItemOfAMenu._id.secondCategory}
              </p>
              {secondItemOfAMenu.isOpen && (
                <ul className={styles.menu_third_level}>
                  {buildThirdLevelOfAMenu(route, secondItemOfAMenu.pages)}
                </ul>
              )}
            </li>
          );
        })}
      </>
    );
  };

  const buildThirdLevelOfAMenu = (
    route: string,
    pages: IPageItem[]
  ): JSX.Element => {
    console.log(asPath);

    return (
      <>
        {pages.map((el) => {
          return (
            <li
              className={`${styles.menu_third_level_item} ${
                asPath === `/${route}/${el.alias}`
                  ? styles.menu_third_level_item__active
                  : ""
              }`}
              key={el._id}
            >
              <Link href={`/${route}/${el.alias}`}>
                <a>{el.category}</a>
              </Link>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu_first_level}>{buildFirstLevelOfAMenu()}</ul>
    </nav>
  );
};
