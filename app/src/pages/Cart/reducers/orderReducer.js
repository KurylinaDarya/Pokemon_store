import { createSlice } from "@reduxjs/toolkit";

import { createNewOrder, getOrders } from "../thunks/index";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createNewOrder.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createNewOrder.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });

    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOrders.fulfilled, (state, { payload: orders }) => {
      state.isLoading = false;
      state.data = orders.reverse();
    });
    builder.addCase(getOrders.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export default orderSlice.reducer;
