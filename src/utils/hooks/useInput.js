import { useReducer } from "react";

const dispatchFunc = (prevState, action) => {
  if (action.type === "CHANGE") {
    return {
      ...prevState,
      enteredValue: action.enteredValue,
      isTouched: action.enteredValue.trim() === "",
    };
  }
  if (action.type === "BLUR") {
    return {
      ...prevState,
      enteredValue: action.enteredValue,
      isTouched: action.enteredValue.trim() === "",
    };
  }
  return prevState;
};

const INITIAL_STATE = {
  enteredValue: "",
  isTouched: false,
};

export const useInput = (validateState) => {
  const [stateValues, dispatch] = useReducer(dispatchFunc, INITIAL_STATE);

  const valueIsValid = validateState(stateValues.enteredValue);
  const hasError = !valueIsValid && stateValues.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", enteredValue: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR", enteredValue: event.target.value });
  };
  return {
    value: stateValues.enteredValue,
    isValid: stateValues.valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
