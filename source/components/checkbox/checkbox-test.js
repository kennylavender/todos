import test from "tape";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";
import Checkbox from "./checkbox";

test("Checkbox", t => {
  t.test("render a checkbox", t => {
    const $ = dom.load(render(<Checkbox checked={false} />));

    t.deepEqual($("input").length, 1, "should render an input");
    t.deepEqual($("input").attr("type"), "checkbox", "should render an input");

    t.end();
  });

  t.test("render an unchecked box", t => {
    const $ = dom.load(render(<Checkbox checked={false} />));

    t.deepEqual(
      $("input").attr("checked"),
      undefined,
      "should not render checked when checked is false"
    );

    t.end();
  });

  t.test("render an checked box", t => {
    const $ = dom.load(render(<Checkbox checked={true} />));

    t.deepEqual(
      $("input").attr("checked"),
      "checked",
      "should render checked when checked is true"
    );

    t.end();
  });
});
