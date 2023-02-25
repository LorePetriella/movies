import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import React from "react";

const DashboardPage = () => {
  return <Layout>Página Dashboard</Layout>;
};

export const Dashboard = withAuth(DashboardPage);
