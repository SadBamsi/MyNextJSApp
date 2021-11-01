import React, { FunctionComponent } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Sidebar } from "../components/Sidebar";
import { AppContextProvider, IAppContext } from "../context/app.context";
import styles from "./styles.module.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const WithLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
