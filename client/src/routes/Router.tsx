import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RouteAccess } from "@/types/RouteAccess";
import { routes } from "./routes";
import { NotAuthenticatedOnlyRoute } from "./NotAuthenticatedOnlyRoute";
import { UserAuthRoute } from "./UserAuthRoute";
import { SuperUserAuthRoute } from "./SuperUserAuthRoute";

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(routes).map((key) => {
          const { access, Component, path } =
            routes[key as keyof typeof routes];
          switch (access) {
            case RouteAccess.NO_ACCESS: {
              return <Route element={<Component />} key={key} path={path} />;
            }
            case RouteAccess.NOT_AUTHENTICATED_ONLY: {
              return (
                <Route
                  element={
                    <NotAuthenticatedOnlyRoute>
                      <Component />
                    </NotAuthenticatedOnlyRoute>
                  }
                  key={key}
                  path={path}
                />
              );
            }
            case RouteAccess.USER: {
              return (
                <Route
                  element={
                    <UserAuthRoute>
                      <Component />
                    </UserAuthRoute>
                  }
                  key={key}
                  path={path}
                />
              );
            }
            case RouteAccess.SUPERUSER: {
              return (
                <Route
                  element={
                    <SuperUserAuthRoute>
                      <Component />
                    </SuperUserAuthRoute>
                  }
                  key={key}
                  path={path}
                />
              );
            }
            default: {
              return null;
            }
          }
        })}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
