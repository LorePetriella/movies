import { Layout, LoginForm } from "../../components";
import { withAuth } from "../../hoc";

const LoginPage = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export const Login = withAuth(LoginPage);
