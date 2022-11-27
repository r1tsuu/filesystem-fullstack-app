import { useState } from "react";
import { login } from "@/services/api/auth";
import { LoginBody } from "@/types/User";
import { useUserAuth } from "@/contexts/UserAuth";
import { LoginForm } from "./LoginForm";

export const LoginFormContainer = () => {
  const { setUser } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidCredentialsError, setIsInvalidCredentialsError] =
    useState(false);

  const handleSubmit = async (formData: LoginBody) => {
    setIsLoading(true);

    const response = await login(formData);

    setIsLoading(false);
    if (response === "invalidCredentials") {
      setIsInvalidCredentialsError(true);
    } else {
      setUser(response.user);
    }
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isInvalidCredentialsError={isInvalidCredentialsError}
    />
  );
};
