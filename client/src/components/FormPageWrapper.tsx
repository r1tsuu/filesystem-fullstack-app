import { Box } from "@mui/material";

export const FormPageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
