import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services/users";
import { LoginForm, User } from "../../types";

const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  const login = async ({ email, pass }: LoginForm) => {
    const user = (await servicesUser.getBy(email, "email")) as User;

    if (user.password === pass) {
      const sessiontoken = tokenGenerator();
      servicesUser.update({ id: user.id, sessiontoken });

      localStorage.setItem("sessiontoken", sessiontoken);

      setMe(user);
    } else {
      console.log("login incorrecto");
    }
  };

  // const signup = (user: Omit<User, "id">) => {};

  const loginWithToken = async () => {
    const sessiontoken = localStorage.getItem("sessiontoken");

    if (sessiontoken && me !== undefined) {
      const user = await servicesUser.getBy(sessiontoken, "sessiontoken");

      console.log(user);

      if (user) {
        setMe({
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        });
      }
    }
  };

  const logout = async () => {
    await servicesUser.update({ id: me?.id, sessiontoken: null });
    setMe(undefined);
  };

  return { me, login, loginWithToken, logout };
};

export { useMe };
