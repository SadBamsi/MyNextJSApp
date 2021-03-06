import styles from "./styles.module.css";
import React, { useState } from "react";
import { Htag } from "../Htag";
import { IProductModel } from "../../interfaces/producnt.interface";
import { Tag } from "../Tag";
import Cup from "./icons/Cup.svg";
import { Rating } from "../Rating";
import { formOfNumWord, priceConvert } from "../../helpers/helpers";
import { CharacteristicItem } from "./components/CharacteristicItem";
import { Advantage } from "../Advantage";
import { Button } from "../Button";
import Image from "next/image";
import { Review } from "../Review";
import { Form } from "../Form";

interface IProps {
  product: IProductModel;
}

export const Product: React.FC<IProps> = ({ product }) => {
  const { title, price, oldPrice, credit, initialRating, reviewCount } =
    product;
  const [isReviewOpened, setReviewOpened] = useState<boolean>(false);

  const toggleReview = () => setReviewOpened(!isReviewOpened);

  return (
    <>
      <div className={styles.product}>
        <header className={styles.product_header}>
          <Image
            className={styles.product_image}
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            width={70}
            height={70}
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
            <p>{formOfNumWord(reviewCount)}</p>
          </div>
        </header>
        <div className={styles.product_body}>
          <span className={styles.product_description}>
            {product.description}
          </span>
          <div className={styles.product_advantages_area}>
            <ul className={styles.product_characteristics}>
              {product.characteristics.map((item) => (
                <CharacteristicItem
                  description={item.name}
                  value={item.value}
                  tags={product.tags}
                />
              ))}
              <li>
                {" "}
                <span>
                  {product.tags?.map((el) => (
                    <Tag>{el}</Tag>
                  ))}
                </span>
              </li>
            </ul>
            <div className={styles.advantages}>
              {product.disAdvantages && (
                <Advantage isPositive={false}>
                  {product.disAdvantages}
                </Advantage>
              )}
              {product.advantages && (
                <Advantage>{product.advantages}</Advantage>
              )}
            </div>
          </div>
        </div>
        <div className={styles.button_area}>
          <Button primary>Узнать подробнее</Button>
          <Button withArrow opened={isReviewOpened} onClick={toggleReview}>
            Читать отзывы
          </Button>
        </div>
      </div>
      <div className={styles.reviews}>
        {product.reviews.map((el) => (
          <Review isOpened={isReviewOpened} person={el}></Review>
        ))}
        <Form className={styles.form} action="" />
      </div>
    </>
  );
};
``;
