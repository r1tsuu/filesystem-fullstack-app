import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "../src/config/muiTheme";

import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addons.setConfig({
  theme: themes.dark,
});

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

addDecorator((story) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
