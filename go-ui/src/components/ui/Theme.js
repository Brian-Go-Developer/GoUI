import { createTheme } from "@material-ui/core";

const defaultBlue = "#0B72B9";
const defaultOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${defaultBlue}`,
      orange: `${defaultOrange}`,
    },
    primary: {
      main: `${defaultBlue}`,
    },
    secondary: {
      main: `${defaultOrange}`,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontStyle: "italic",
      textTransform: "none",
      color: "white",
    },
  },
});
