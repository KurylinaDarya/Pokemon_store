import axios from "axios";

import { api } from "../../../api/config";

export const signIn = async (credentials) => {
  try {
    const response = await api.post("/auth/signIn", credentials);

    if (axios.isAxiosError(response)) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
