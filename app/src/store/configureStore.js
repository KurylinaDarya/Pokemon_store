import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../pages/SignIn/reducers/index";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});
