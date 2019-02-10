import test from "tape";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";
import Text from "./text";

test("Text", t => {
  t.test("render children", t => {
    const $ = dom.load(render(<Text>Foo</Text>));

    t.deepEqual($("span").text(), 'Foo', "should render the test");

    t.end();
  });
});

console.log('hello')