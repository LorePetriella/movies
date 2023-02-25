import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import React from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export { Layout };
