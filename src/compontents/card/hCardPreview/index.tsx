import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./index.styles";

import HCard from "../hCard";

const HCardPreview = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      lg={6}
      container
      justify="center"
      alignContent="center"
      className={classes.root}
    >
      <HCard />
    </Grid>
  );
};

export default HCardPreview;
