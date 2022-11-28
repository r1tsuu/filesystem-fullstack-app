import { Stack, Box, Typography } from "@mui/material";
import { FieldValues, useFormContext } from "react-hook-form";

export const Form = <TFields extends FieldValues>({
  children,
  title,
  onSubmit,
}: {
  children: React.ReactNode;
  title: string;
  onSubmit: (data: TFields) => void;
}) => {
  const { handleSubmit } = useFormContext<TFields>();
  return (
    <Box
      minWidth={"600px"}
      borderRadius={3}
      border={({ palette }) => `1px solid ${palette.text.primary}`}
      boxShadow={"0 0px 20px rgb(0 0 0 / 20%)"}
      position="relative"
      p={6}
    >
      <Stack
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => onSubmit(data))}
        gap={4}
        position="relative"
      >
        <Typography fontWeight={"bold"} mb={3} textAlign="center" variant="h2">
          {title}
        </Typography>
        {children}
      </Stack>
    </Box>
  );
};
