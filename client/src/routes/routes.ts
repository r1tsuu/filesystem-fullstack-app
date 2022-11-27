import { RouteAccess } from "@/types/RouteAccess";
import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));

export const routes = {
  home: {
    path: "/",
    access: RouteAccess.USER,
    Component: HomePage,
  },
  login: {
    path: "/login",
    access: RouteAccess.NOT_AUTHENTICATED_ONLY,
    Component: LoginPage,
  },
};
