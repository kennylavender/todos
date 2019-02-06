import test from "tape";
import { TodoAppComponent } from "./todo-app-component";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";

test("TodoAppComponent", t => {
  t.test("render children", t => {
    const $ = dom.load(
      render(
        <TodoAppComponent>
          <div className="child" />
          <div className="child" />
        </TodoAppComponent>
      )
    );

    t.deepEqual($(".child").length, 2, "given children should render them all");

    t.end();
  });
});
