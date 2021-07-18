import { createTheme } from "@material-ui/core/styles";
// import { createMuiTheme } from '@material-ui/core'
import {
  deepPurple,
  // indigo, 
  // lightBlue,
  pink,
} from "@material-ui/core/colors";

const typography = {
  h1: {
    fontSize: "24px",
    lineHeight: "24px",
    fontWeight: "normal",
    color: "#C4C4C4",
  },
  h2: {
    fontSize: "20px",
    lineHeight: "29px",
    fontWeight: "normal",
    color: "#212121",
  },
  h3: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "bold",
    color: "#757575",
  },
  body1: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "normal",
    color: "#212121",
  },
  body2: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "normal",
    color: "#757575",
    margin: "20px 0 -10px",
  },
};

const overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "0",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    input: {
      fontSize: "16px",
    },
  },
  MuiFormLabel: {
    root: {
      color: "#757575",
    },
  },
  MuiButton: {
    root: {
      marginLeft: "10px",
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: "bold",
      borderRadius: "0",
    },
    contained: {
      color: "#fff",
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: "0",
    },
    elevation1: {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
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
  overrides,
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    // primary: indigo,
    // secondary: lightBlue,
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
  overrides,
});
