import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import CartContainer from "../pages/Cart/container/CartContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
    </Routes>
  );
};

export default Router;
