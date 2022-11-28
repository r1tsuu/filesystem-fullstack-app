import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./config/muiTheme";
import { Router } from "./routes/Router";
import { UserAuthProvider } from "@/contexts/UserAuth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <UserAuthProvider>
          <Router />
        </UserAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
