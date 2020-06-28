import { createMuiTheme } from "@material-ui/core"
// import theme from "../gatsby-plugin-theme-ui"

const muTheme = createMuiTheme({
  palette: {
    type: "default",
    primary: {
      light: "#f9683a",
      main: "#bf360c",
      dark: "#870000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#5dc6f2",
      main: "#0c95bf",
      dark: "#00678f",
      contrastText: "#fff",
    },
  },
})

console.log('muTheme', JSON.stringify(muTheme, null, 2));

export default muTheme
