import axios from "axios";

import { api } from "../../../api/config";

export const getCart = async () => {
  try {
    const response = await api.get("/cart");

    if (axios.isAxiosError(response)) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
