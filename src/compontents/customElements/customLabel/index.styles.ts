import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #dbe0e2",
    marginBottom: 15,
    height: 30,
    [theme.breakpoints.down("xs")]: {
      height: 22,
    },
  },
  label: {
    color: "#34495e",
    textAlign: "left",
    width: 120,
    [theme.breakpoints.down("xs")]: {
      width: 80,
      fontSize: 10,
    },
  },
  value: {
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  valueAnimation: {
    animation: "$showCard 5s",
  },
  "@keyframes showCard": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));
  
  export default useStyles;