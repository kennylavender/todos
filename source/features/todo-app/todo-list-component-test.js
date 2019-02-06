import test from "tape";
import React from "react";
import dom from "cheerio";
import { TodoList } from "./todo-list-component";
import { renderToStaticMarkup as render } from "react-dom/server";

test('TodoList', t => {
  {
    const $ = dom.load(render(
      <TodoList>
        <div className="item" />
        <div className="item" />
      </TodoList>
    ))

    t.deepEqual(
      $('.item').length,
      2,
      'given children, should render the children'
    )
  }
  t.end()
})