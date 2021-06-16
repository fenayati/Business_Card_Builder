import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: 20,
      height: 70,
      [theme.breakpoints.down("md")]: {
        width: "25%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "33.33%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    label: {
      color: "#2c3e50",
    },
    input: {
      backgroundColor: "transparent",
      paddingLeft: 10,
      border: "1px solid #c3c4c3",
      borderRadius: 5,
      height: 35,
      width: "90%",
      fontFamily: "Merriweather",
      fontSize: 16,
      "&:focus": {
        outline: "none",
        border: "1px solid #c0bcbc",
        boxShadow: "0.5px 0.5px 0.5px 0.5px #eee",
        backgroundColor: "#ffe",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        boxSizing: "border-box",
      },
    },
    error: {
      color: "#f00",
    },
    errorAnimation: {
        animation: "$shake 0.2s ease-in-out 0s 1",
      },
      "@keyframes shake": {
        "0%" : {
            marginLeft: "0rem"
          },
          "25%" : {
            marginLeft: "0.5rem"
          },
          "75%": {
            marginLeft: "-0.5rem"
          },
          "100%": {
            marginLeft: "0rem"
          },
      },
  }));
  
  export default useStyles;