import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { ETopLevelCategory } from "../interfaces/page.interface";
import { IMenuItem } from "../pages/[route]/[alias]";

export interface IAppContext {
  menu: IMenuItem[];
  firstCategory: ETopLevelCategory;
  setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: ETopLevelCategory.Courses,
});

export const AppContextProvider: React.FC<PropsWithChildren<IAppContext>> = ({
  menu,
  firstCategory,
  children,
}) => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
  const setMenu = (newMenu: IMenuItem[]) => setMenuState(newMenu);
  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
