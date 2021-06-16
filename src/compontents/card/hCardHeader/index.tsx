import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./index.styles";
import clsx from "clsx";

import profileImg from "../../../assets/images/profile.png";
import { ItemContext } from "../../../contexts/ItemsContext";

const HCardHeader = () => {
  const { root, image, imageDiv, name, nameAnimation } = useStyles();
  const { getItemValue } = useContext(ItemContext);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-end"
      className={root}
    >
      <Typography
        className={clsx(name, {
          [nameAnimation]: getItemValue("GIVEN NAME").length > 0,
        })}
        variant="h2"
      >
        {getItemValue("GIVEN NAME") + " " + getItemValue("SURENAME")}
      </Typography>
      <div className={imageDiv}>
        <img
          id="profileImage"
          alt="H Card Builder"
          className={clsx(image, {
            [nameAnimation]: getItemValue("GIVEN NAME").length > 1,
          })}
          src={profileImg}
        />
      </div>
    </Grid>
  );
};

export default HCardHeader;
