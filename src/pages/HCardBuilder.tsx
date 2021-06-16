import React from "react";
import { Grid } from "@material-ui/core";

import FormBuilder from "../compontents/form/formBuilder";
import CardPreview from "../compontents/card/hCardPreview";
import ItemContextProvider from "../contexts/ItemsContext";

const HCardBuilder = () => {
  return (
    <ItemContextProvider>
      <Grid container direction="row">
        <FormBuilder />
        <CardPreview />
      </Grid>
    </ItemContextProvider>
  );
};

export default HCardBuilder;
