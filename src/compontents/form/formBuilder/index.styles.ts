import {makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "40px 50px 0px 50px",
      backgroundColor: "white",
      [theme.breakpoints.down("md")]: {
        padding: "15px 15px 0px 15px",
      },
    },
    title: {
      marginBottom: 40,
      [theme.breakpoints.down("md")]: {
        marginBottom: 15,
      },
    },
    button: {
      width: "90%",
      height: 40,
      [theme.breakpoints.down("md")]: {
        marginBottom: 10,
        width: "100%",
      },
    },
    error: {
      color: "#f00",
    },
  }));
  export default useStyles;