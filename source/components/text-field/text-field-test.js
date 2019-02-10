import test from "tape";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";
import TextField from "./text-field";

test("TextField", t => {
  t.test("render a checkbox", t => {
    const $ = dom.load(render(<TextField />));

    t.deepEqual($("input").length, 1, "should render an input");
    t.deepEqual($("input").attr("type"), "text", "should render an input of type text");

    t.end();
  });

  t.test("render a given value", t => {
    const $ = dom.load(render(<TextField value={'foo'} />));

    t.deepEqual(
      $("input").val(),
      'foo',
      "should render a given value"
    );

    t.end();
  });

});

console.log('hello')