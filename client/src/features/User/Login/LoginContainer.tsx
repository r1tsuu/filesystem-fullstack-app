import { useState } from "react";
import { login } from "./LoginService";
import { useUserAuth } from "@/contexts/UserAuth";
import { LoginForm } from "./LoginForm";
import { useMutation } from "react-query";

export const LoginContainer = () => {
  const { setUser } = useUserAuth();
  const [isInvalidCredentialsError, setIsInvalidCredentialsError] =
    useState(false);

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      if (data === "invalidCredentials") {
        setIsInvalidCredentialsError(true);
      } else {
        setUser(data.user);
      }
    },
  });

  return (
    <LoginForm
      onSubmit={mutate}
      isLoading={isLoading}
      isInvalidCredentialsError={isInvalidCredentialsError}
    />
  );
};
