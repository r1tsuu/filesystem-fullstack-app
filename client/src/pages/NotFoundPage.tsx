import { useUserAuth } from "@/contexts/UserAuth";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const NotFoundPage = () => {
  const { user } = useUserAuth();

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        borderRadius={3}
        border={({ palette }) => `1px solid ${palette.text.primary}`}
        boxShadow={"0 0px 20px rgb(0 0 0 / 20%)"}
        padding={5}
        textAlign="center"
        spacing={3}
      >
        <Typography fontSize={"14rem"} variant="h1">
          404
        </Typography>
        <Typography variant="h2">Page not found</Typography>
        {!user && (
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
            <Button href="/login" variant="contained">
              Log in
            </Button>
            <Button href="/signup" variant="contained">
              Sign up
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
