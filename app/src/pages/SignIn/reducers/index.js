import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn as signInRequest } from "../api/index";

import { LOCAL_STORAGE_KEYS } from "../../../constans/index";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: {},
};

export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  const responce = await signInRequest(data);

  return responce.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload;

      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    },
    [signIn.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export const { exitAccount } = authSlice.actions;

export default authSlice.reducer;