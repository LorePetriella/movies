import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMe } from "../../hooks";

const publicRoutes = ["/login", "/signup"];

const withAuth = (Component: FC): FC => {
  const Authenticated = () => {
    const { me } = useMe();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/");
      }
      if (!me && !publicRoutes.includes(location.pathname)) {
        navigate("/login");
      }
    }, [me, location, navigate]);
    return <Component />;
  };
  return Authenticated;
};

export { withAuth };
