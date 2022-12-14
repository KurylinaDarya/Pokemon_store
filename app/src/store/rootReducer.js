import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authSlice from "../pages/SignIn/reducers/index";
import pokemonsSlice from "../pages/Shop/reducers/index";
import productDetailsSlice from "../pages/PokemonDetails/reducers/index";
import cartSlice from "../pages/Cart/reducers/cartReducer";
import orderSlice from "../pages/Cart/reducers/orderReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["userInfo", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  pokemons: pokemonsSlice,
  productDetails: productDetailsSlice,
  cart: cartSlice,
  order: orderSlice,
});
