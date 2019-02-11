import test from "tape";
import React from "react";
import dom from "cheerio";
import TodoListItem from "./todo-list-item-component";
import { renderToStaticMarkup as render } from "react-dom/server";

test("TodoListItem", t => {
  t.test("can render children", t => {
    const $ = dom.load(
      render(
        <TodoListItem>
          <div className="child" />
          <div className="child" />
        </TodoListItem>
      )
    );

    t.deepEqual($(".child").length, 2, "should render children");

    t.end();
  });
});
