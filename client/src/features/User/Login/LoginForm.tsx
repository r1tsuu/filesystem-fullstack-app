import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Link, Stack, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";

import * as texts from "@/config/texts";
import * as regex from "@/utils/regex";
import { LoginBody } from "./types";
import {
  ControlledInput,
  FormLoadingProvider,
  Form,
  SubmitButton,
} from "@/features/Form";

interface LoginFormProps {
  onSubmit: (data: LoginBody) => void;
  isLoading?: boolean;
  isInvalidCredentialsError?: boolean;
}

const schema = yup.object().shape({
  email: yup.string().required(texts.EMAIL_REQUIRED).matches(regex.email, {
    message: texts.EMAIL_MATCHES,
  }),
  password: yup.string().matches(regex.password, {
    message: texts.PASSWORD_MATCHES,
  }),
});

export const LoginForm = ({
  onSubmit,
  isLoading = false,
  isInvalidCredentialsError = false,
}: LoginFormProps) => {
  const methods = useForm<LoginBody>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <FormLoadingProvider isLoading={isLoading}>
        <Form title="Login into Your Account" onSubmit={onSubmit}>
          <ControlledInput name="email" inputType="email" label="Email" />
          <Stack spacing={1}>
            <ControlledInput
              name="password"
              inputType="password"
              label="Password"
            />
            <Link
              textAlign="end"
              variant="subtitle1"
              component={RouterLink}
              to="/reset-password"
            >
              Forgot your password?
            </Link>
          </Stack>
          <SubmitButton>Sign In</SubmitButton>
          {isInvalidCredentialsError && (
            <Alert
              sx={{
                textAlign: "center",
                ".MuiAlert-icon": {
                  alignItems: "center",
                },
              }}
              severity="error"
            >
              <Typography variant="subtitle1">
                The email or password you have entered is incorrect. Please try
                again.
              </Typography>
            </Alert>
          )}
          <Typography textAlign="center" variant="subtitle1">
            Doesn't have an account yet?{" "}
            <Link component={RouterLink} to="/signup">
              Sign Up
            </Link>
          </Typography>
        </Form>
      </FormLoadingProvider>
    </FormProvider>
  );
};
