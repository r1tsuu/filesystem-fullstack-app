import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotAuthenticatedOnlyRoute } from "./NotAuthenticatedOnlyRoute";
import { UserAuthRoute } from "./UserAuthRoute";
// import { SuperUserAuthRoute } from "./SuperUserAuthRoute";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route
            element={
              <UserAuthRoute>
                <HomePage />
              </UserAuthRoute>
            }
            path="/"
          />
          <Route
            element={
              <NotAuthenticatedOnlyRoute>
                <LoginPage />
              </NotAuthenticatedOnlyRoute>
            }
            path="/login"
          />
          <Route
            element={
              <NotAuthenticatedOnlyRoute>
                <RegisterPage />
              </NotAuthenticatedOnlyRoute>
            }
            path="/signup"
          />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
