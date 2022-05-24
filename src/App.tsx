/** @jsxImportSource @emotion/react */
import React from 'react';
import { Css, px } from "./Css";
import { jsx, css } from '@emotion/react';
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Header } from "./Header";
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div css={Css.df.fdc.ais.vh100.bgWhite.m0.p0.$} className="App">
      <Header />
      <div css={Css.w75.df.fdc.asc.pb7.$}>
        <h2 css={Css.f40.indigo500.$}>Lucy Conklin</h2>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
