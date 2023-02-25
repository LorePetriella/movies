import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import React from "react";
const UpcomingPage = () => {
  return <Layout>Página Upcoming</Layout>;
};

export const Upcoming = withAuth(UpcomingPage);
