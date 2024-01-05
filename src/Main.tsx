/** @jsxImportSource @emotion/react */
import React from "react";
import { Css, px } from "./Css";

export function Main() {
  return (
    <div>
      <p css={Css.maxw(px(500)).indigo700.f18.add("lineHeight", "24px").$}>
        I'm a software developer at based in Littleton, Colorado. I love working
        on interesting problems, with a team, in an environment where I never
        stop learning.
      </p>
    </div>
  );
}
