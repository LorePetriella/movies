import { FC, ReactNode } from "react";
import React from "react";
type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="main flex-grow-1">{children}</main>;
};

export { Main };
