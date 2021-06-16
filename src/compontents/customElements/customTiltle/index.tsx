import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./index.styles";

interface CustomTitleProps {
  title: string;
}

const CustomTitle = ({ title }: CustomTitleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

export default CustomTitle;
