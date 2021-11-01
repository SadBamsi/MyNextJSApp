import { ETopLevelCategory } from "./page.interface";
export interface IFirstLevelMenu {
  route: string;
  name: string;
  icon: JSX.Element;
  id: ETopLevelCategory;
}
