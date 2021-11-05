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
