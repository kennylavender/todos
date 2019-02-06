import test from "tape";
import { CSSReset } from "./css-reset";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";

test("CSSReset", t => {
  t.test("render children", t => {
    const $ = dom.load(
      render(
        <CSSReset>
          <div className="child" />
          <div className="child" />
        </CSSReset>
      )
    );

    t.deepEqual($(".child").length, 2, "given children should render them all");

    t.end();
  });
});
