import { User } from "@/types/User";
import { post, isAxiosError } from "@/config/http";
import { LoginBody } from "./types";

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
