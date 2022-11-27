import { useUserAuth } from "@/contexts/UserAuth";
import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export const UserAuthRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to={routes.login.path} />;
  }

  return children;
};
