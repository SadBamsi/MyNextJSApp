import React, { useEffect, useReducer, useState } from "react";
import { Htag } from "../../components/Htag";
import { Product } from "../../components/Product";
import { ESort, Sort } from "../../components/Sort";
import { Tag } from "../../components/Tag";
import {
  ETopLevelCategory,
  ITopPageModel,
} from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/producnt.interface";
import { sortReducer } from "./sort.reducer";
import styles from "./styles.module.css";

interface ITopPageComponentProps extends Record<string, unknown> {
  firstCategory?: ETopLevelCategory;
  page?: ITopPageModel;
  products?: IProductModel[];
}

export const ToPPageComponent: React.FC<ITopPageComponentProps> = ({
  page,
  products,
}) => {
  const setSort = (sort: ESort) => {
    dispatchSort({ type: sort });
  };
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products: products as any,
      sort: ESort.Rating,
    }
  );

  return (
    <section className={styles.top_page_component}>
      <header className={styles.top_page_header}>
        <Htag tag={"h1"}>{page?.title}</Htag>
        <Tag color={"gray"} size={"l"}>
          {sortedProducts.length}
        </Tag>
        <div className={styles.top_page_sort_area}>
          <Sort sort={sort} setSort={setSort} />
        </div>
      </header>
      <div className={styles.products}>
        {sortedProducts.map((el: IProductModel) => (
          <Product key={el.title} product={el} />
        ))}
      </div>
    </section>
  );
};
