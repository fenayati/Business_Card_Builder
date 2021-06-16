import React, { useRef, useContext, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./index.styles";

import { ItemContext } from "../../../contexts/ItemsContext";

interface CustomInputProps {
  label: string;
  type: string;
  inputType: string;
}

function getErrorMsg(
  type: string,
  value: string,
  label: string,
  conditionInput: string[]
): string {
  let errorMsg: string = "";
  if (value.length === 0) return `Please enter ${label.toLowerCase()}!`;

  if (type === "email")
    return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid Email Address !";

  const limitInput: string[] = conditionInput[1]?.split(":");
  limitInput &&
    limitInput[0] === "equal" &&
    value.length !== Number(limitInput[1]) &&
    (errorMsg = `The ${label.toLowerCase()} field should be ${
      limitInput[1]
    } characters! `);

  return errorMsg;
}

function checkCustomInput(value: string, conditionInput: string[]): boolean {
  const limitInput: string[] = conditionInput[1]?.split(":");
  let checkInput: boolean = true;

  switch (conditionInput[0]) {
    case "number":
      checkInput = /^[0-9]*$/.test(value);
      break;
    case "phone":
      checkInput = /^0[0-9]*$/.test(value);
      break;
    case "text":
      checkInput = /^[a-z\s]*$/i.test(value) && !/\s{2}/.test(value);
      break;
    case "textNumber":
      checkInput = /^[0-9a-z\s]*$/i.test(value) && !/\s{2}/.test(value);
      break;
  }
  checkInput =
    checkInput &&
    (limitInput === undefined ||
      new RegExp(`^.{0,${Number(limitInput[1])}}$`, "i").test(value));
  return checkInput;
}
const CustomInput = ({ label, type, inputType }: CustomInputProps) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const { getStateItem, setStateItem } = useContext(ItemContext);

  let item = getStateItem(label);
  const conditionInput: string[] = inputType.split("|");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Grid item lg={6} className={classes.root}>
      <Typography variant="body2" className={classes.label}>
        {label}
      </Typography>
      <input
        ref={inputRef}
        data-testid={`test${label.replace(/ /g, "")}`}
        autoFocus={label === "GIVEN NAME"}
        style={
          conditionInput.find((element) => element === "upper")
            ? { textTransform: "uppercase" }
            : {}
        }
        className={clsx(classes.input, {
          [classes.errorAnimation]: error,
        })}
        value={item.value}
        onChange={(e) => {
          let val = e.target.value;
          if (type === "phone") {
            val = val.replace(/\s/g, "");
            let newVal = val.substring(0, 2);
            newVal = newVal + (val.length > 2 ? " " : "");
            newVal = newVal + val.substring(2, 6);
            newVal = newVal + (val.length > 6 ? " " : "");
            newVal = newVal + val.substring(6, 11);
            val = newVal;
          }

          checkCustomInput(
            type === "phone" ? val.replace(/\s/g, "") : val,
            conditionInput
          ) && setStateItem(label, val, "");
        }}
        onBlur={() => {
          const result: string = getErrorMsg(
            type,
            type === "phone" ? item.value.replace(/\s/g, "") : item.value,
            label,
            conditionInput
          );
          if (result.length > 0) {
            setStateItem(label, item.value, result);
            setError(true);
          }
        }}
        onFocus={() => {
          setError(false);
          item.errorMsg.length > 0 && setStateItem(label, item.value, "");
          if (type === "phone" && item.value === "") {
            setStateItem(label, "0", "");
          }
        }}
      />
      {item.errorMsg.length > 0 && (
        <Typography variant="body2" className={classes.error}>
          {item.errorMsg}
        </Typography>
      )}
    </Grid>
  );
};

export default CustomInput;
