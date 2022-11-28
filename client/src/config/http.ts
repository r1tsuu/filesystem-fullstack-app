import axios from "axios";
import { User } from "@/types/User";

const API_BASE_URL = "http://localhost:5000/api";

const client = axios.create({
  baseURL: API_BASE_URL,
});

client.interceptors.request.use(function (config) {
  const user = localStorage.getItem("user") as User | null;
  if (config.headers) {
    config.headers.Authorization = user ? `Bearer ${user.token}` : "";
  }
  return config;
});

export const { post, get } = client;
