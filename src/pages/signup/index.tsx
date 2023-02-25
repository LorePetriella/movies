import { Layout, SignUpForm } from "../../components";
import { withAuth } from "../../hoc";
import React from "react";

const SignupPage = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export const Signup = withAuth(SignupPage);
