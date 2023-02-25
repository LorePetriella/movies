import { FC, ReactNode } from "react";
import React from "react";
type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export { Main };
