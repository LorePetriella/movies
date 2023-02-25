import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const DashboardPage = () => {
  return <Layout>Página Dashboard</Layout>;
};

export const Dashboard = withAuth(DashboardPage);
