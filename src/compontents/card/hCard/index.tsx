import React from "react";
import useStyles from "./index.styles";
import { Grid, Typography } from "@material-ui/core";

import HCardHeader from "../hCardHeader";
import HCardDetails from "../hCardDetails";

const HCard = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        HCARD PREVIEW
      </Typography>
      <HCardHeader />
      <HCardDetails />
    </Grid>
  );
};

export default HCard;
