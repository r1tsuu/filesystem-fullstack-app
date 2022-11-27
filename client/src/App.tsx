import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./config/muiTheme";
import { Router } from "./routes/Router";
import { UserAuthProvider } from "@/contexts/UserAuth";

export function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <UserAuthProvider>
        <Router />
      </UserAuthProvider>
    </ThemeProvider>
  );
}
