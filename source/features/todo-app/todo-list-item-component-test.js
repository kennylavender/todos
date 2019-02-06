import test from "tape";
import React from "react";
import dom from "cheerio";
import { TodoListItem } from "./todo-list-item-component";
import { renderToStaticMarkup as render } from "react-dom/server";

test("TodoListItem", t => {
  {
    const $ = dom.load(
      render(
        <TodoListItem
          todo={{
            id: "foo",
            title: "Foo",
            isComplete: false,
          }}
        />
      )
    );

    t.deepEqual(
      $(".todo-list-item .title-text").text(),
      "Foo",
      "should render the todo title"
    );
  }

  t.test("user can mark todos complete", t => {
    {
      const $ = dom.load(
        render(
          <TodoListItem
            todo={{
              id: "foo",
              title: "Foo",
              isComplete: false,
            }}
          />
        )
      );

      t.deepEqual(
        $(".todo-list-item").hasClass("is-complete"),
        false,
        "should not render is-complete class when the todo.isComplete is false"
      );

      t.deepEqual(
        $(".todo-list-item .mark-complete-button").length,
        1,
        "should render a button to mark the todo complete when todo.isComplete is false"
      );

      t.deepEqual(
        $(".todo-list-item .mark-incomplete-button").length,
        0,
        "should not render a button to mark the todo incomplete when todo.isComplete is false"
      );
    }
    {
      const $ = dom.load(
        render(
          <TodoListItem
            todo={{
              id: "foo",
              title: "Foo",
              isComplete: true,
            }}
          />
        )
      );

      t.deepEqual(
        $(".todo-list-item").hasClass("is-complete"),
        true,
        "should render is-complete class when the todo.isComplete is true"
      );

      t.deepEqual(
        $(".todo-list-item .mark-complete-button").length,
        0,
        "should not render a button to mark the todo complete when todo.isComplete is false"
      );

      t.deepEqual(
        $(".todo-list-item .mark-incomplete-button").length,
        1,
        "should render a button to mark the todo incomplete when todo.isComplete is false"
      );
    }
    t.end();
  });
  
  t.end();
});
