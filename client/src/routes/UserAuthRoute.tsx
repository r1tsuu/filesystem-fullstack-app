import { useUserAuth } from "@/contexts/UserAuth";
import { Navigate } from "react-router-dom";

export const UserAuthRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
