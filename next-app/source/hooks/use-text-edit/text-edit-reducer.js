export const init = value => ({
  type: "INIT",
  payload: { value },
});

export const edit = () => ({
  type: "EDIT",
});

export const updateValue = value => ({
  type: "UPDATE_VALUE",
  payload: { value },
});

export const save = () => ({
  type: "SAVE",
});

export const defaultState = {
  value: "",
  isEditing: false,
};

export const textEditReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case save().type:
      return { ...state, isEditing: false };
    case edit().type:
      return { ...state, isEditing: true };
    case updateValue().type:
    case init().type:
      return { ...state, ...payload };
    default:
      return state;
  }
};
