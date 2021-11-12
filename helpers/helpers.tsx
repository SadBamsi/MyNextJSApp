import { IFirstLevelMenu } from "../interfaces/menu.unterface";
import { ETopLevelCategory } from "../interfaces/page.interface";
import CoursesIcon from "./icons/CoursesIcon.svg";
import BooksIcon from "./icons/BooksIcon.svg";
import ServicesIcon from "./icons/ServicesIcon.svg";
import ProductsIcon from "./icons/ProductsIcon.svg";

export const firstLevelMenu: IFirstLevelMenu[] = [
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

export const priceRegexp = /\B(?=(\d{3})+(?!\d))/g;

export const priceConvert = (price: number) =>
  price.toString().replace(priceRegexp, " ") + " ₽";

export const formOfNumWord = (num: number) => {
  if (num % 10 == 0 || num % 10 > 4 || num % 100 === 11) {
    return num + " отзывов";
  }
  if (num % 10 === 1) {
    return num + " отзыв";
  } else {
    return num + " отзыва";
  }
};
