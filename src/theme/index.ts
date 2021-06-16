import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3498db",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#627b8b",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#2c3e50",
    //  cardLabel: "#34495e",
    //  sectionTitle: "#b0b8bc",
    },
    background: {
     // cardTitle: "#2c3e50",
    },
  },
  typography:{
    allVariants: {fontFamily: 'Merriweather' },
    h1 : {
      fontSize: 28,
      fontFamily: 'MerriweatherSans',
      fontWeight: 800,
    },
    h2 : {
      fontSize: 24,
      fontFamily: 'MerriweatherSans',
      fontWeight: "bold",
    },
    subtitle2:{
      fontSize: 10,
    },
    subtitle1:{
      fontSize:16
    },
    button:{
      textTransform: "none",
      fontSize: 16
    }
  }
});
export default theme;
