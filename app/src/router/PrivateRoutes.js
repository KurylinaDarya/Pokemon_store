import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { isAuthSelector } from "../selectors";
import { ROUTE_NAMES } from "./routeNames";

const PrivateRoutes = () => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default PrivateRoutes;
