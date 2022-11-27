import { RegisterBody, User, LoginBody } from "../../types/User";
import { isAxiosError, post } from "./client";

type RegisterResponse =
  | {
      user: User;
    }
  | "userDoesExist";

export const register = (body: RegisterBody) => {
  return post<RegisterResponse>(`/user/register`, body);
};

type LoginResponse = {
  user: User;
};

type LoginErrorResponse = "invalidCredentials";

export const login = async (body: LoginBody) => {
  try {
    const { data } = await post<LoginResponse>(`/user/login`, body);
    return data;
  } catch (error) {
    if (isAxiosError<LoginErrorResponse>(error) && error.response) {
      return error.response.data;
    }
    throw new Error();
  }
};
