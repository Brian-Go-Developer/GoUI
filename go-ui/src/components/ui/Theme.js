import { createTheme } from "@material-ui/core";

const defaultBlue = "#2699fb";
const defaultOrange = "#7cb342";

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
    h1: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    h2: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    h3: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    h4: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    h5: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    h6: {
      color: "#fff",
      fontFamily: ['"Poppins"', "Montserrat"].join(","),
    },
    body1: {
      color: "#000",
      fontFamily: ['"Montserrat"', "Poppins"].join(","),
    },
    body2: {
      color: "#000",
      fontFamily: ['"Montserrat"', "Poppins"].join(","),
    },
  },
});
