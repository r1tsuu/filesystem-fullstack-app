import { useUserAuth } from "@/contexts/UserAuth";
import { Navigate } from "react-router-dom";

export const SuperUserAuthRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { user } = useUserAuth();

  if (user === null) return <Navigate to="/login" />;

  if (!user.isSuperUser) return <Navigate to="/" />;

  return children;
};
