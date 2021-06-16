import React from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./index.styles";

interface CustomlabelProps {
  label: string;
  value: string;
  line?: number;
  extraValue?: string;
}

const CustomLabel = ({ label, value, line, extraValue }: CustomlabelProps) => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Typography variant="subtitle1" className={classes.label}>
          {label}
        </Typography>
        <Typography
          variant="subtitle1"
          className={clsx(classes.value, {
            [classes.valueAnimation]: value.length > 0,
          })}
        >
          {value}
        </Typography>
      </Grid>
      {line && (
        <Grid container className={classes.root}>
          <Typography
            variant="subtitle1"
            className={classes.label}
          ></Typography>
          <Typography
            variant="subtitle1"
            className={clsx(classes.value, {
              [classes.valueAnimation]: extraValue
                ? extraValue.length > 0
                : false,
            })}
          >
            {extraValue}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default CustomLabel;
