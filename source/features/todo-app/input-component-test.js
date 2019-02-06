import test from "tape";
import { Input } from "./input-component";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";

test("Input", t => {
  t.test("prop pass through", t => {
    const props = {
      value: "Foo",
      onChange: function() {},
    };
    const $ = dom.load(render(<Input {...props} />));
    t.deepEqual(
      $("input").val(),
      props.value,
      "the input should render the given value"
    );
    t.end();
  });
});
