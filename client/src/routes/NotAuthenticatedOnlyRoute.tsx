import { useUserAuth } from "@/contexts/UserAuth";
import { Navigate } from "react-router-dom";

export const NotAuthenticatedOnlyRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { user, notAuthenticatedOnlyRedirectsEnabled } = useUserAuth();

  if (user && notAuthenticatedOnlyRedirectsEnabled)
    return <Navigate to={"/"} />;

  return children;
};
