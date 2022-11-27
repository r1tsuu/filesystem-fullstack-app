import { useUserAuth } from "@/contexts/UserAuth";
import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export const SuperUserAuthRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { user } = useUserAuth();

  if (user === null) return <Navigate to={routes.login.path} />;

  if (!user.isSuperUser) return <Navigate to={routes.home.path} />;

  return children;
};
