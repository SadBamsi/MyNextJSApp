import React, { ReactNode } from "react";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import axios from "axios";
import { WithLayout } from "../../layout";
import {
  ETopLevelCategory,
  ITopPageModel,
} from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/producnt.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { ToPPageComponent } from "../../page-components/TopPageComponent";

const TopPage: React.FC<ITopPageProps> = ({
  products,
  firstCategory,
  page,
}) => {
  return (
    <ToPPageComponent
      products={products}
      firstCategory={firstCategory}
      page={page}
    />
  );
};

export default WithLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_API}`,
      {
        firstCategory: menuItem.id,
      }
    );
    let item = menu.flatMap((el) =>
      el.pages.map((page) => `/${menuItem.route}/${page.alias}`)
    );
    paths = [...item, ...paths];
  }

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => {
    return m.route === params.route;
  });
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find/`,
      {
        firstCategory: firstCategoryItem?.id,
      }
    );
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<ITopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );
    const { data: products } = await axios.post<IProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem?.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: IPageItem[];
  isOpen?: boolean;
}

interface ITopPageProps extends Record<string, unknown> {
  menu?: IMenuItem[];
  firstCategory?: ETopLevelCategory;
  page?: ITopPageModel;
  products?: IProductModel[];
}
