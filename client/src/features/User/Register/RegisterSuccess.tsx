import { Box, Button, Typography, Stack } from "@mui/material";

export const RegisterSuccess = ({ userLogin }: { userLogin: string }) => {
  return (
    <Box
      borderRadius={3}
      border={({ palette }) => `1px solid ${palette.text.primary}`}
      boxShadow={"0 0px 20px rgb(0 0 0 / 20%)"}
      position="relative"
      p={6}
    >
      <Box textAlign="center" display="flex" flexDirection="column" gap={3}>
        <Typography variant="h1">
          {"Welcome, "}
          <Typography
            component={"span"}
            variant="h1"
            fontWeight="bold"
            color={({ palette }) => palette.primary.dark}
          >
            {userLogin}!
          </Typography>
        </Typography>
        <Typography variant="h2">You have successfully registered</Typography>
        <Button
          sx={{
            marginTop: "30px",
          }}
          variant="contained"
          href="/"
        >
          Go to home
        </Button>
      </Box>
    </Box>
  );
};
