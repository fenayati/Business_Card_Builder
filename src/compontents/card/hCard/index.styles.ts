import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      borderBottom: "2px solid #9a9a9a",
      [theme.breakpoints.down("md")]: {
        marginBottom: 30,
        width: "100%",
      },
    },
    title: {
      color: "#95a5a6",
      textAlign: "right",
    },
  }));

  export default useStyles;