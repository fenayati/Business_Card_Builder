import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 30px 0px 40px",
    backgroundColor: "#2c3e50",
    height: 100,
  },
  imageDiv: {
    width: 80,
    height: "100%",
    marginBottom: -13,
    zIndex: 1,
    backgroundColor: "#fff",
    boxShadow: "0px 2px  2px 0px #b3b3b3",
  },
  name: {
    color: "#fff",
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
      fontSize: 15,
    },
  },
  nameAnimation: {
    animation: "$showCard 5s",
  },
  "@keyframes showCard": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

  export default useStyles;