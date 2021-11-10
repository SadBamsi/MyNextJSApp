import { IProductModel } from "./../../interfaces/producnt.interface";
import { ESort } from "../../components/Sort";

export type SortActions = { type: ESort } | { type: ESort.Rating };

interface ISortReducerProps {
  sort: ESort;
  products: IProductModel[];
}

export const sortReducer = (
  state: ISortReducerProps,
  action: SortActions
): ISortReducerProps => {
  switch (action.type) {
    case ESort.Price:
      console.log("tut");

      return {
        sort: ESort.Price,
        products: state.products.sort((a, b) => a.price - b.price),
      };
    case ESort.Rating:
      console.log("tut");

      return {
        sort: ESort.Rating,
        products: state.products.sort(
          (a, b) => a.initialRating - b.initialRating
        ),
      };
  }
};
