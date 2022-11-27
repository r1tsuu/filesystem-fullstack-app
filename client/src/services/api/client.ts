import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../config";

export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}

export const { get, post } = axios.create({
  baseURL: API_BASE_URL,
});
