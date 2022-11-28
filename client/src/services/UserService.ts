import { post } from "@/config/http";
import { RegisterBody, User, LoginBody } from "@/types/User";

type RegisterBodyResponse =
  | {
      user: User;
    }
  | {
      error: "userDoesExist";
    };

export const register = async (body: RegisterBody) => {
  const { data } = await post<RegisterBodyResponse>("/user/register", body);

  if ("error" in data) {
    return data.error;
  }

  return data;
};

type LoginResponse =
  | {
      user: User;
    }
  | {
      error: "invalidCredentials";
    };

export const login = async (body: LoginBody) => {
  const { data } = await post<LoginResponse>(`/user/login`, body);

  if ("error" in data) {
    return data.error;
  }

  return data;
};
