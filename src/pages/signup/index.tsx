import { Layout, SignUpForm } from "../../components";
import { withAuth } from "../../hoc";

const SignupPage = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export const Signup = withAuth(SignupPage);
