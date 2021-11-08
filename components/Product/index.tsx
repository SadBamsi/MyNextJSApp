import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";
import { Htag } from "../Htag";
import { IProductModel } from "../../interfaces/producnt.interface";
import { Tag } from "../Tag";
import Cup from "./icons/Cup.svg";
import { Rating } from "../Rating";
import { priceConvert } from "../../helpers/helpers";

interface IProps {
  product: IProductModel;
}

export const Product: React.FC<IProps> = ({ product }) => {
  const { image, title, price, oldPrice, credit, initialRating, reviewCount } =
    product;
  return (
    <div className={styles.product}>
      <header className={styles.product_header}>
        <Image
          width={70}
          height={70}
          src={image}
          className={styles.product_image}
        />
        <div className={styles.product_name}>
          <div className={styles.product_name_wrapper}>
            <Htag tag="h2" className={styles.product_title}>
              {title}
            </Htag>
            <Cup className={styles.product_cup} />
          </div>
          <div className={styles.product_name_categories}>
            {product.categories.map((category) => (
              <Tag>{category}</Tag>
            ))}
          </div>
        </div>
        <div className={styles.product_price}>
          <div className={styles.product_price_wrapper}>
            <span>{priceConvert(price)}</span>
            <Tag color="green">{priceConvert(price - oldPrice)}</Tag>
          </div>
          <p>Цена</p>
        </div>
        <div className={styles.product_price}>
          <span>{priceConvert(credit)}</span>
          <p>в кредит</p>
        </div>
        <div className={styles.product_rating}>
          <Rating rating={initialRating} />
          <p>{reviewCount} отзывов</p>
        </div>
      </header>
    </div>
  );
};
