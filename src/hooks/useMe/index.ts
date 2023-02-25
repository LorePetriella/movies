import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services/users";
import { LoginForm, User } from "../../types";

const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  useEffect(() => {
    loginWithToken();
  }, []);

  const login = async ({ email, pass }: LoginForm) => {
    const { id, name, lastname, password } = (await servicesUser.getBy(
      email,
      "email"
    )) as User;

    if (password === pass) {
      const sesiontoken = tokenGenerator();
      servicesUser.update({ id, sesiontoken });

      localStorage.setItem("sesiontoken", sesiontoken);

      setMe({ id, name, lastname, email });
    } else {
      console.log("login incorrecto");
    }
  };

  // const signup = (user: Omit<User, "id">) => {};

  const loginWithToken = async () => {
    const sesiontoken = localStorage.getItem("sesiontoken");

    if (sesiontoken) {
      const { id, name, lastname, email } = (await servicesUser.getBy(
        sesiontoken,
        "sesiontoken"
      )) as User;
      setMe({ id, name, lastname, email });
    }
  };

  const logout = (id: string) => {
    servicesUser.update({ id, sesiontoken: undefined });
  };

  return { me, login, loginWithToken, logout };
};

export { useMe };