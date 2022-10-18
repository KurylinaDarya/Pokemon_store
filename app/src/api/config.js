import axios from "axios";

import { LOCAL_STORAGE_KEYS, BASE_URL } from "../constans/index";

export const apiConfig = {
  baseURL: BASE_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.data.message === "Unauthorized") {
//       localStorage.clear();
//       window.location.reload();
//     }
//     return error;
//   }
// );

export { api };
