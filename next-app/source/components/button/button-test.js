import test from "tape";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";
import Button from "./button";

test("Button", t => {
  t.test("render children", t => {
    const $ = dom.load(
      render(
        <Button>
          <span>Foo</span>
        </Button>
      )
    );

    t.deepEqual(
      $.root().text(),
      "Foo",
      "should render the children given to it"
    );

    t.end();
  });
});
