import { api } from "../../../api/config";

export const signIn = (credentials) => api.post("/auth/signIn", credentials);
