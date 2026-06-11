import { api } from '../lib/api';
import { AuthData, LoginPayload } from "../types/index"




export const me = async () => {
  const { data } = await api.get("/api/v1/user/me");
  return data;
};


export const loginService = async (authPayload: LoginPayload) => {
    const response = await api.post("/api/v1/auth/login", authPayload);
    const data = response.data;

    return data;
};


export const signupService = async (signupPayload: AuthData) => {
    const response = await api.post("/api/v1/auth/register", signupPayload);
    const data = response?.data;

    return data;
}