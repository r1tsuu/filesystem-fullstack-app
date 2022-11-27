import { createTheme } from "@mui/material";
import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

muiTheme.typography.h2 = {
  fontSize: "2.6rem",
  fontWeight: 700,
  fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  letterSpacing: "-0.00833em",
  [muiTheme.breakpoints.up("sm")]: {
    fontSize: "3.75rem",
  },
};
