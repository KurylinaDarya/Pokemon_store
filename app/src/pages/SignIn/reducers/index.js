import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn as signInRequest } from "../api/index";

import { LOCAL_STORAGE_KEYS } from "../../../constans/index";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: null,
  isAuth: false,
};

export const auth = createAsyncThunk("auth/signIn", async (data) => {
  const responce = await signInRequest(data);

  return responce.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(auth.fulfilled, (state, { payload }) => {
      const { accessToken, ...userInfo } = payload;

      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;
      state.isAuth = true;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    });

    builder.addCase(auth.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default authSlice.reducer;
