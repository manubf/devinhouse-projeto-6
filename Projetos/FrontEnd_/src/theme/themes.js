
import { createTheme } from '@material-ui/core/styles'
// import { createMuiTheme } from '@material-ui/core'
import { deepPurple, indigo, lightBlue, pink } from '@material-ui/core/colors'

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
    margin: '20px 0 -10px',
  },
}

export const getTheme = (darkMode) =>
createTheme({
    ...(darkMode ? darkTheme : lightTheme),
  })

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: pink,
    secondary: deepPurple,
  },
  typography
})

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: lightBlue,
  },
  typography
})
