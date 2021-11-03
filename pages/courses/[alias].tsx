import React, { ReactNode } from "react";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import axios from "axios";
import { WithLayout } from "../../layout";
import { ITopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/producnt.interface";
const firstCategory = 0;

const Course: React.FC<ICourseProps> = ({ products }) => {
  return <ul></ul>;
};

export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_API}`,
    {
      firstCategory,
    }
  );
  return {
    paths: menu.flatMap((el) =>
      el.pages.map((page) => "/courses/" + page.alias)
    ),
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<ICourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    console.log("tut");

    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find/`,
    {
      firstCategory,
    }
  );
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
      firstCategory,
      page,
      products,
    },
  };
};

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpen?: boolean;
}

interface ICourseProps extends Record<string, unknown> {
  menu?: IMenuItem[];
  firstCategory?: number;
  page?: ITopPageModel;
  products?: IProductModel[];
}
