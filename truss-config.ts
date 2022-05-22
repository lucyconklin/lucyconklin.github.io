import { Aliases, defineConfig, FontConfig, newMethod } from "@homebound/truss";

// Defines the px value of abbreviations. e.g `mt1` will be `marginTop: 6px`.
const increment = 6;

// Defines how many increment abbreviations to generate, e.g. `mt0`, `mt1`, ...
const numberOfIncrements = 7;

// Defines the typeface abbreviations, the keys can be whatever you want
const fonts: FontConfig = {
  f10: "10px",
  f12: "12px",
  f14: "14px",
  f16: "16px",
  f18: "18px",
  f20: "20px",
  f24: "24px",
  // Besides the "24px" shorthand, you can define weight+size+lineHeight tuples
  tiny: { fontWeight: 400, fontSize: "10px", lineHeight: "14px" },
};

// Defines color abbreviations, e.g. `Css.bgBlack.$`, the keys can be whatever you want
const palette = {
  Black: "#353535",
  MidGray: "#4A4A4A",
  LightGray: "#777777",
  White: "#fcfcfa",
  Blue: "#526675",
  BlueFaded: "rgba(82, 102, 117, 0.3)",
  Hollow: "rgba(0, 0, 0, 0)",
  Lemon: "#F1B62B",
  Tangerine: "#E37C22",
  Cherry: "#DA0B36",
  Raspberry: "#AF0B58",
  Plum: "#7B3A88",
  Blueberry: "#3F51B5",
  Apple: "#1CA176",
  Kiwi: "#7DB759",
  Indigo50: "#E8EAF6",
  Indigo100: "#C5CAE9",
  Indigo200: "#9FA8DA",
  Indigo300: "#7986CB",
  Indigo400: "#5C6BC0",
  Indigo500: "#3F51B5",
  Indigo600: "#3949AB",
  Indigo700: "#303F9F",
  Indigo800: "#283593",
  Indigo900: "#1A237E",
  BrightIndigo100: "#8C9EFF",
  BrightIndigo200: "#536DFE",
  BrightIndigo400: "#3D5AFE",
  BrightIndigo700: "#304FFE",
};

// You can add/remove your own application-specific/one-off rules as needed.

const colorChangeBgKeyframes = "@keyframes color-change-background {0% {background-color: #F1B62B} 11% {background-color: #E37C22} 23% {background-color: #DA0B36} 37% {background-color: #AF0B58} 50% {background-color: #7B3A88} 64% {background-color: #3F51B5} 77% {background-color: #1CA176} 91% {background-color: #7DB759} 100% {background-color: #F1B62B}}"
const colorChangeFillKeyframes = "@keyframes color-change-fill {0% {fill: #F1B62B} 11% {fill: #E37C22} 23% {fill: #DA0B36} 37% {fill: #AF0B58} 50% {fill: #7B3A88} 64% {fill: #3F51B5} 77% {fill: #1CA176} 91% {fill: #7DB759} 100% {fill: #F1B62B}}"
const sections = {
  animation: () => [
    newMethod("colorChangeBg", { animation: `color-change-background 10s linear infinite; ${colorChangeBgKeyframes}` }),
    newMethod("colorChangeFill", { animation: `color-change-fill 10s linear infinite; ${colorChangeFillKeyframes}`})
  ],
  transition: () => [
    newMethod("transitionSlow", { transition: "all 1s ease"})
  ]
};

// Defines common application-specific aliases of abbreviation -> N other abbreviations
const aliases: Aliases = {
  bodyText: ["f14", "black"],
};

// Defines breakpoints that create `sm`, `md`, `mdAndUp`, `mdOrLg`, etc. media query consts
const breakpoints = { sm: 0, md: 600, lg: 960 };

export default defineConfig({
  outputPath: "./src/Css.ts",
  palette,
  fonts,
  increment,
  numberOfIncrements,
  aliases,
  breakpoints,
  sections,
});
