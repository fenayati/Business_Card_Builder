import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e1e4e7",
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "auto",
      padding: "15px 15px 0px 15px",
    },
  },
}));

  export default useStyles;