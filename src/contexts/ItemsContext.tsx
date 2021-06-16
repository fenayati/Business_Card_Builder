import React, { createContext, useState } from "react";

type ItemContextType = {
  values: { label: string; value: string; errorMsg: string }[];
  getStateItem: Function;
  setStateItem: Function;
  checkAllfields: Function;
  getItemValue: Function;
  setCardData: Function;
};

const ItemContext = createContext<ItemContextType>({
  values: [],
  getStateItem: () => {},
  setStateItem: () => {},
  checkAllfields: () => {},
  getItemValue: () => {},
  setCardData: () => {},
});

export { ItemContext };

interface ItemContextProviderProps {
  children: React.ReactNode;
}
const ItemContextProvider = ({ children }: ItemContextProviderProps) => {
  const [cardData, setCardData] = useState<
    { label: string; value: string; errorMsg: string }[]
  >([]);

  const getItemValue = (labelItem: string): string => {
    let result = "";

    cardData.forEach(({ label, value }) => {
      if (label === labelItem) {
        result = value;
      }
    });
    return result;
  };

  const [values, setValues] = useState<
    {
      label: string;
      value: string;
      errorMsg: string;
    }[]
  >([
    { label: "GIVEN NAME", value: "", errorMsg: "" },
    { label: "SURENAME", value: "", errorMsg: "" },
    { label: "EMAIL", value: "", errorMsg: "" },
    { label: "PHONE", value: "", errorMsg: "" },
    { label: "HOUSE NAME OR #", value: "", errorMsg: "" },
    { label: "STREET", value: "", errorMsg: "" },
    { label: "SUBURB", value: "", errorMsg: "" },
    { label: "STATE", value: "", errorMsg: "" },
    { label: "POSTCODE", value: "", errorMsg: "" },
    { label: "COUNTRY", value: "", errorMsg: "" },
  ]);

  const setStateItem = (
    label: string,
    value: string,
    errorMsg: string
  ): void => {
    let newValues = values;

    newValues.forEach((nv) => {
      if (nv.label === label) {
        nv.value = value;
        let spaceIndex: number = value.lastIndexOf(" ");
        if (spaceIndex === -1) {
          nv.value = value.substring(0, 1).toUpperCase() + value.substring(1);
        } else {
          nv.value =
            value.substring(0, spaceIndex + 1) +
            value.substring(spaceIndex + 1, spaceIndex + 2).toUpperCase() +
            value.substring(spaceIndex + 2);
        }
        nv.errorMsg = errorMsg;
      }
    });
    setValues([...newValues]);
  };

  const getStateItem = (
    label: string
  ): { label: string; value: string; errorMsg: string } => {
    let result: { label: string; value: string; errorMsg: string } = {
      label: "",
      value: "",
      errorMsg: "",
    };
    values.forEach((val) => {
      if (val.label === label) {
        result = val;
      }
    });
    return result;
  };

  const checkAllfields = (): boolean => {
    let checked: boolean = true;
    let newValues = values;

    newValues.forEach(({ label, value, errorMsg }) => {
      if (value === "") {
        checked = false;
        errorMsg = `Please enter ${label.toLowerCase()}!`;
      } else {
        const arrNumber: { labelItem: string; len: number }[] = [
          { labelItem: "POSTCODE", len: 4 },
          { labelItem: "PHONE", len: 10 },
        ];
        arrNumber.forEach(({ labelItem, len }) => {
          if (labelItem === label && value.replace(/\s/g, "").length !== len) {
            checked = false;
            errorMsg = `${labelItem} should be ${len} characters!`;
          }
        });
        if ("EMAIL" === label && !/\S+@\S+\.\S+/.test(value)) {
          checked = false;
          errorMsg = `Invalid Email Address!`;
        }
      }
    });
    setValues([...newValues]);
    return checked;
  };
  return (
    <ItemContext.Provider
      value={{
        values,
        getStateItem,
        setStateItem,
        checkAllfields,
        getItemValue,
        setCardData,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
