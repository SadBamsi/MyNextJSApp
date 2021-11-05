import React from "react";
import { Htag } from "../../components/Htag";
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
  return (
    <section className={styles.top_page_component}>
      <header className={styles.top_page_header}>
        <Htag tag={"h1"}>{page?.title}</Htag>
        {products && (
          <Tag color={"gray"} size={"l"}>
            {products.length}
          </Tag>
        )}
        <div>
          <span>Sorting</span>
          <span>Sorting</span>
        </div>
      </header>
      {products && (
        <div className={styles.products}>
          {products.map((el) => (
            <div>{el.title}</div>
          ))}
        </div>
      )}
    </section>
  );
};
