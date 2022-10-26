import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../../../services/CartService";
import OrderService from "../../../services/OrderService";

export const getCartInfo = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CartService.getCartInfo();

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItem = createAsyncThunk(
  "cart/addItem",
  async (itemToAdd, { rejectWithValue }) => {
    try {
      const response = await CartService.addItem(itemToAdd);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "cart/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await CartService.deleteItem(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateItem = createAsyncThunk(
  "cart/updateItem",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CartService.updateItem(payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getOrders = createAsyncThunk("order/getOrders", async () => {
  const response = await OrderService.getOrders();

  return response.data;
});

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",
  async (newOrder, { dispatch, rejectWithValue }) => {
    try {
      const response = await OrderService.addOrder(newOrder);

      dispatch(getCartInfo());

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
