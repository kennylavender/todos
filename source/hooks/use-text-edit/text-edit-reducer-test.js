import describe from "tape";
import {
  textEditReducer,
  defaultState,
  init,
  edit,
  updateValue,
  save,
} from "./text-edit-reducer";

const createState = o => Object.assign({}, defaultState, o);

describe.only("textEditReducer", ({ test }) => {
  test("default state", ({ end, deepEqual }) => {
    deepEqual(
      textEditReducer(),
      defaultState,
      "should return the default state when no arguments are given"
    );
    end();
  });

  test("initialize()", ({ end, deepEqual }) => {
    const actions = [init("Go do something")];
    const state = actions.reduce(textEditReducer, textEditReducer());

    deepEqual(
      state,
      createState({
        value: "Go do something",
      }),
      "should set the value when given an init action"
    );

    end();
  });

  test("edit()", ({ end, deepEqual }) => {
    const actions = [init("Some todo value"), edit()];

    const state = actions.reduce(textEditReducer, textEditReducer());

    deepEqual(
      state,
      createState({ value: "Some todo value", isEditing: true }),
      "should update isEditing to true when given a edit action"
    );
    end();
  });

  test("updateValue()", ({ end, deepEqual }) => {
    const actions = [init("Some todo value"), edit(), updateValue("Foo")];

    const state = actions.reduce(textEditReducer, textEditReducer());

    deepEqual(
      state,
      createState({ value: "Foo", isEditing: true }),
      "should update the value when given a updateValue action"
    );

    end();
  });

  test("save()", ({ end, deepEqual }) => {
    const actions = [
      init("Some todo value"),
      edit(),
      updateValue("Foo"),
      save(),
    ];

    const state = actions.reduce(textEditReducer, textEditReducer());

    deepEqual(
      state,
      createState({ value: "Foo", isEditing: false }),
      "should update isEditing to false when given a save action"
    );

    end();
  });
});
