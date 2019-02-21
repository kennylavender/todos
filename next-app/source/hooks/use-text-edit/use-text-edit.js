import React, { useReducer, useEffect } from "react";
import { textEditReducer, init } from "./text-edit-reducer";

const useTextEdit = value => {
  const [state, dispatch] = useReducer(textEditReducer, textEditReducer());
  useEffect(() => {
    dispatch(init(value));
  }, [value]);
  return [state, dispatch];
};

export default useTextEdit;
