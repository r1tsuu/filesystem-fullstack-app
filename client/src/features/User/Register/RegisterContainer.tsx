import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { useUserAuth } from "@/contexts/UserAuth";
import { register } from "./RegisterService";
import { RegisterForm } from "./RegisterForm";
import { RegisterSuccess } from "./RegisterSuccess";

export const RegisterContainer = () => {
  const {
    user,
    setUser,
    notAuthenticatedOnlyRedirectsEnabled,
    setNotAuthenticatedOnlyRedirectsEnabled,
  } = useUserAuth();
  const [isUserExistsError, setIsUserExistsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { mutate, isLoading } = useMutation(register, {
    onSuccess: (data) => {
      if (data === "userDoesExist") {
        setIsUserExistsError(true);
      } else {
        setNotAuthenticatedOnlyRedirectsEnabled(false);
        setUser(data.user);
        setIsSuccess(true);
      }
    },
  });

  useEffect(() => {
    return () => {
      if (!notAuthenticatedOnlyRedirectsEnabled)
        setNotAuthenticatedOnlyRedirectsEnabled(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSuccess && user) {
    return <RegisterSuccess userLogin={user.login} />;
  }

  return (
    <RegisterForm
      isLoading={isLoading}
      onSubmit={mutate}
      isUserExistsError={isUserExistsError}
    />
  );
};
