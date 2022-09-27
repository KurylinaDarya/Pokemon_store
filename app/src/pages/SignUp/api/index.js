import { api } from "../../../api/config";

// export const signUp = (credentials) => api.post(`/auth/signup`, credentials);
export const signUp = (signUpInfo) => api.post("/auth/signup", signUpInfo);
