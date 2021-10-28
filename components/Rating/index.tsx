import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Star } from "../icon-components/Star";
import styles from "./styles.module.css";

interface IProps {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}

export const Rating: React.FC<IProps> = ({
  isEditable,
  rating,
  setRating,
  ...rest
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => constructorArray(rating), [rating]);

  const constructorArray = (currentNumber: number) => {
    const updatedArray = ratingArray.map((el, i) => (
      <Star
        isField={i < currentNumber}
        onHover={() => hoveringFill(i + 1)}
        onLeave={() => constructorArray(rating)}
        onClick={() => setRating && setRating(i + 1)}
      />
    ));
    setRatingArray(updatedArray);
  };

  const hoveringFill = (index: number) => {
    constructorArray(index);
  };

  return (
    <div {...rest}>
      {ratingArray.map((el, i) => (
        <span key={String(i + Date.now())}>{el}</span>
      ))}
    </div>
  );
};
