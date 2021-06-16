import React, { useRef, useState, useContext } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./index.styles";

import { ItemContext } from "../../../contexts/ItemsContext";
import FormInfoSection from "../formInfoSection";
import FormDetails from "../../../data/data.json";

const FormBuilder = () => {
  const classes = useStyles();
  const { values, checkAllfields, setCardData } = useContext(ItemContext);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Grid item lg={6} className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Business Card Builder
      </Typography>
      {FormDetails.map(({ title, items }) => (
        <FormInfoSection key={title} title={title} items={items} />
      ))}
      <Grid container direction="row">
        {imgError && (
          <Grid container>
            <Typography variant="body2" className={classes.error}>
              Image size can not exceed more than 80K.
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <input
            accept=".png, .jpg, .jpeg, .gif, .tiff, .jfif"
            onChange={(e) => {
              var FR = new FileReader();
              if (
                e.target.files &&
                e.target.files[0] &&
                document.getElementById("profileImage")
              ) {
                e.target.files[0].size > 80000
                  ? setImgError(true)
                  : FR.addEventListener("load", function (event) {
                      if (
                        event.target &&
                        document.getElementById("profileImage")
                      ) {
                        document
                          .getElementById("profileImage")
                          ?.setAttribute(
                            "src",
                            event.target.result
                              ? event.target.result?.toString()
                              : ""
                          );
                      }
                    });
                FR.readAsDataURL(e.target.files[0]);
              }
            }}
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            Upload Avatar
          </Button>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              if (checkAllfields()) {
                setCardData(JSON.parse(JSON.stringify(values)));
              }
            }}
          >
            Create hCard
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormBuilder;
