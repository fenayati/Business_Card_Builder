import {makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 5,
    },
  },
}));
  export default useStyles;