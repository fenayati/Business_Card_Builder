import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./index.styles";

import CustomInput from "../../customElements/customInput";
import CustomTitle from "../../customElements/customTiltle";

interface FormInfoSectionProps {
  title: string;
  items: { label: string; type: string; inputType: string }[];
}

const FormInfoSection = ({ title, items }: FormInfoSectionProps) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <CustomTitle title={title} />
      <Grid container direction="row" wrap="wrap">
        {items.map(({ label, type, inputType }) => (
          <CustomInput
            key={label}
            label={label}
            type={type}
            inputType={inputType}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default FormInfoSection;
