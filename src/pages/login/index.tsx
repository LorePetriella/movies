import { Layout, LoginForm } from "../../components";
import { withAuth } from "../../hoc";
import React from "react";

const LoginPage = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export const Login = withAuth(LoginPage);
