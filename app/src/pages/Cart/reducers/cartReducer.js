import { createSlice } from "@reduxjs/toolkit";

import { getCartInfo, addItem, deleteItem, updateItem } from "../thunks/index";

const initialState = {
  totalPrice: 0,
  quantity: 0,
  customerId: null,
  itemsList: {},
  isLoading: false,
  error: null,
};

const сartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCartInfo.fulfilled, (state, { payload }) => {
      const itemsList = payload.itemsList.reduce((result, cartItem) => {
        result[cartItem.id] = cartItem;

        return result;
      }, {});

      state.isLoading = false;
      state.totalPrice = payload.totalPrice;
      state.quantity = payload.quantity;
      state.customerId = payload.customerId;
      state.itemsList = itemsList;
    });
    builder.addCase(getCartInfo.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });

    builder.addCase(addItem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addItem.fulfilled, (state, { payload }) => {
      const itemsList = payload.itemsList.reduce((result, cartItem) => {
        result[cartItem.id] = cartItem;

        return result;
      }, {});

      state.isLoading = false;
      state.totalPrice = payload.totalPrice;
      state.quantity = payload.quantity;
      state.customerId = payload.customerId;
      state.itemsList = itemsList;
    });
    builder.addCase(addItem.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(deleteItem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
      const { quantity, totalPrice } = payload.cartState;

      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;

      const _ = require("lodash");

      state.itemsList = _.omit(state.itemsList, payload.removedItemId);
    });
    builder.addCase(deleteItem.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(updateItem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateItem.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.totalPrice = payload.cartState.totalPrice;

      const key = payload.updatedItem.id;

      state.itemsList[key].quantity = payload.updatedItem.quantity;
    });
    builder.addCase(updateItem.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default сartSlice.reducer;
