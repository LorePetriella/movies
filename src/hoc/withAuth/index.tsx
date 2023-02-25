import { FC, useEffect } from "react";
import { useMe } from "../../hooks";

const publicRoutes = ["/login", "signup"];

const withAuth = (Component: FC): FC => {
  const Authenticated = () => {
    const { me } = useMe();

    useEffect(() => {
      console.log(me);
    }, [me]);
    return <Component />;
  };
  return Authenticated;
};

export { withAuth };
