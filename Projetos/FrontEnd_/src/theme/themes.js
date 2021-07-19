import { createTheme } from "@material-ui/core/styles";
import { deepPurple, pink } from "@material-ui/core/colors";

const typography = {
  h1: {
    fontSize: "24px",
    lineHeight: "24px",
    fontWeight: "normal",
  },
  h2: {
    fontSize: "20px",
    lineHeight: "29px",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "bold",
  },
  body1: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "normal",
  },
  body2: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "normal",
    margin: "20px 0 -10px",
  },
};

export const getTheme = (darkMode) =>
  createTheme({
    ...(darkMode ? darkTheme : lightTheme),
  });

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: pink,
    secondary: deepPurple,
  },
  typography,
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    common: {
      black: "#212121",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    primary: {
      light: "#69a1e3",
      main: "#005B95",
      dark: "#003252",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9e9e9e",
      main: "#C4C4C4",
      dark: "#757575",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#9e9e9e",
      hint: "#9e9e9e",
    },
  },
  typography,
});
