import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./index.styles";

import CustomLabel from "../../customElements/customLabel";
import { ItemContext } from "../../../contexts/ItemsContext";

const HCardDetails = () => {
  const classes = useStyles();
  const { getItemValue } = useContext(ItemContext);

  return (
    <Grid container direction="column" className={classes.root}>
      <CustomLabel label="EMAIL" value={getItemValue("EMAIL")} />
      <CustomLabel label="PHONE" value={getItemValue("PHONE")} />
      <CustomLabel
        label="ADDRESS"
        value={
          getItemValue("HOUSE NAME OR #").length > 0
            ? getItemValue("HOUSE NAME OR #") + " " + getItemValue("STREET")
            : ""
        }
        line={2}
        extraValue={
          getItemValue("SUBURB").length > 0
            ? getItemValue("SUBURB") + ", " + getItemValue("STATE")
            : ""
        }
      />
      <Grid container direction="row">
        <Grid item xs={12} lg={6}>
          <CustomLabel label="POSTCODE" value={getItemValue("POSTCODE")} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomLabel label="COUNTRY" value={getItemValue("COUNTRY")} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HCardDetails;
