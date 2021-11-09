import React, { useState } from "react";
import { Htag } from "../../components/Htag";
import { Product } from "../../components/Product";
import { Sort } from "../../components/Sort";
import { Tag } from "../../components/Tag";
import {
  ETopLevelCategory,
  ITopPageModel,
} from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/producnt.interface";
import styles from "./styles.module.css";

interface ITopPageComponentProps extends Record<string, unknown> {
  firstCategory?: ETopLevelCategory;
  page?: ITopPageModel;
  products?: IProductModel[];
}

export const ToPPageComponent: React.FC<ITopPageComponentProps> = ({
  firstCategory,
  page,
  products,
}) => {
  const [active, setActive] = useState(false);
  return (
    <section className={styles.top_page_component}>
      <header className={styles.top_page_header}>
        <Htag tag={"h1"}>{page?.title}</Htag>
        {products && (
          <Tag color={"gray"} size={"l"}>
            {products.length}
          </Tag>
        )}
        <div className={styles.top_page_sort_area}>
          <Sort isActive={true}>По рейтингу</Sort>
          <Sort>По цене</Sort>
        </div>
      </header>
      {products && (
        <div className={styles.products}>
          {products.map((el) => (
            <Product key={el.title} product={el} />
          ))}
        </div>
      )}
    </section>
  );
};
