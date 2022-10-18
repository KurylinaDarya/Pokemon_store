// import axios from "axios";

import { api } from "../../../api/config";

export const getPokemons = ({ page }) =>
  api.get(`/products?page=${page}&limit=20`);

// export const getPokemons = async (page) => {
//   try {
//     const response = await api.get(`/products?page=${page}&limit=20`);

//     if (axios.isAxiosError(response)) {
//       throw response;
//     }

//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
