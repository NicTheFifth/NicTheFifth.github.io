import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: { fontSize: "3rem", color: "#0A0605" },
    },
  }),
  { breakpoints: ["xs", "md"] }
);
