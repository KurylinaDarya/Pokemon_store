import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../api/index";
import { LOCAL_STORAGE_KEYS } from "../../../constans/index";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
  isAuth: false,
};

export const auth = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signIn(data);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(auth.fulfilled, (state, { payload }) => {
      const { accessToken, ...data } = payload;

      state.isLoading = false;
      state.data = data;
      state.isAuth = true;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    });

    builder.addCase(auth.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export default authSlice.reducer;
