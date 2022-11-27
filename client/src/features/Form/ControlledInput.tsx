import { useFormContext, FieldValues, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { useIsFormLoading } from "./FormLoadingContext";

export const ControlledInput = ({
  name,
  label,
  inputType = "text",
  isRequired = true,
}: {
  name: string;
  label: string;
  inputType: "email" | "password" | "text";
  isRequired?: boolean;
}) => {
  const isLoading = useIsFormLoading();
  const { control } = useFormContext<FieldValues>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          disabled={isLoading}
          required={isRequired}
          label={label}
          type={inputType}
          variant="outlined"
          error={Boolean(error?.message)}
          helperText={error?.message}
        />
      )}
    />
  );
};
