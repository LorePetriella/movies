import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const UpcomingPage = () => {
  return <Layout>Página Upcoming</Layout>;
};

export const Upcoming = withAuth(UpcomingPage);
