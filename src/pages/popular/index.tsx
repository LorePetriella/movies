import { Layout } from "../../components";

import { withAuth } from "../../hoc";
import React from "react";

const PopularPage = () => {
  return <Layout>Populares</Layout>;
};

export const Popular = withAuth(PopularPage);
