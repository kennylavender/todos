import test from "tape";
import BodyStyles from "./body-styles";
import React from "react";
import dom from "cheerio";
import { renderToStaticMarkup as render } from "react-dom/server";

test("BodyStyles", t => {
  t.test("render children", t => {
    const $ = dom.load(
      render(
        <BodyStyles>
          <div className="child" />
          <div className="child" />
        </BodyStyles>
      )
    );

    t.deepEqual($(".child").length, 2, "given children should render them all");

    t.end();
  });
});
