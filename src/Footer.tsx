/** @jsxImportSource @emotion/react */
import React from 'react';
import { Css } from "./Css";
import { jsx, css } from '@emotion/react';

export function Footer() {
  return (
    <div css={Css.tr.$}>
      <section css={Css.maxw50.$}>
        <a href="https://github.com/lucyconklin" target="blank">
          github
        </a>
        <a href="https://www.instagram.com/lucyconklin" target="blank">
          instagram
        </a>
        <a href="https://www.linkedin.com/in/lucy-conklin/" target="blank">
          linkedIn
        </a>
      </section>
    </div>
  )
}