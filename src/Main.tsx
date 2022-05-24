/** @jsxImportSource @emotion/react */
import React from 'react';
import { Css, px } from "./Css";
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

export function Main() {
  return (
    <div>
      <p css={Css.maxw(px(500)).indigo700.f18.add("lineHeight", "24px").$}>
        I'm a software developer at <a css={{...Css.noUnderline.brightIndigo700.b.$, "&:hover": Css.indigo900.bb.bw2.bIndigo100.$ }} href="https://homebound.com" target="_blank">Homebound</a>. Currently based in Colorado. I love working on interesting problems, with a team, in an environment where I never stop learning.
      </p>
    </div>
  )
}