import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Link, Stack, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";

import * as texts from "@/config/texts";
import * as regex from "@/utils/regex";
import { RegisterBody } from "@/types/User";
import {
  ControlledInput,
  FormLoadingProvider,
  Form,
  SubmitButton,
} from "@/features/Form";

interface RegisterFormProps {
  onSubmit: (data: RegisterBody) => void;
  isLoading: boolean;
}

const schema = yup.object().shape({
  login: yup.string().required(texts.LOGIN_REQUIRED).matches(regex.login, {
    message: texts.LOGIN_MATCHES,
  }),
  email: yup
    .string()
    .required(texts.EMAIL_REQUIRED)
    .matches(regex.email, { message: texts.EMAIL_MATCHES }),
  password: yup.string().required(texts.PASSWORD_REQUIRED),
  passwordConfirm: yup
    .string()
    .required(texts.PASSWORD_CONFIRM_REQUIRED)
    .oneOf([yup.ref("password")], texts.PASSWORD_CONFIRM_MATCHES),
});

interface RegisterFormType extends RegisterBody {
  passwordConfirm: string;
}

export const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const methods = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <FormLoadingProvider isLoading={isLoading}>
        <Form onSubmit={onSubmit} title="Sign up">
          <div />
        </Form>
      </FormLoadingProvider>
    </FormProvider>
  );
};
