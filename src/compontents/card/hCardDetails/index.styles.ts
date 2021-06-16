import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: "20 10",
    },
  },
  title: {
    color: "#95a5a6",
    textAlign: "right",
  },
}));

  export default useStyles;