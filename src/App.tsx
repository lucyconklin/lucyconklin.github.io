/** @jsxImportSource @emotion/react */
import React from "react";
import { Css } from "./Css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div css={Css.df.fdc.ais.h100.vh100.bgWhite.m0.p0.$} className="App">
      <Header />
      <div css={Css.w75.df.fdc.asfs.pb7.maxwPx(1200).mlPx(66).$}>
        <h2 css={Css.f40.indigo500.$}>Lucy Conklin</h2>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
