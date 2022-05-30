import { useState } from "react";

export const useInput = (validateState) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateState(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
