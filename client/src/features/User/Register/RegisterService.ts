import { post, isAxiosError } from "@/config/http";
import { User } from "@/types/User";
import { RegisterBody } from "./types";

type RegisterBodyResponse = {
  user: User;
};

type RegisterErrorResponse = "userDoesExist";

export const register = async (body: RegisterBody) => {
  try {
    const { data } = await post<RegisterBodyResponse>("/user/register", body);
    return data;
  } catch (error) {
    if (isAxiosError<RegisterErrorResponse>(error) && error.response) {
      return error.response.data;
    }
    throw new Error();
  }
};
