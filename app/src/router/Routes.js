import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import ShopContainer from "../pages/Shop/container/ShopContainer";
import CartContainer from "../pages/Cart/container/CartContainer";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.SHOP} element={<ShopContainer />} />
        {/* <Route
          path={ROUTE_NAMES.POKEMON_DETAILS}
          element={<PokemonDetailsContainer />}
        /> */}
      </Route>
      <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
    </Routes>
  );
};

export default Router;
