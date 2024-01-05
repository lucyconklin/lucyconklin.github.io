/** @jsxImportSource @emotion/react */
import React from "react";
import { Css, px } from "./Css";

export function Footer() {
  return (
    <div css={Css.df.asfs.fdr.pb7.$}>
      <section css={Css.mr5.maxw(px(500)).$}>
        <SocialLink name="github" path="https://github.com/lucyconklin" />
        <SocialLink
          name="instagram"
          path="https://www.instagram.com/lucyconklin"
        />
        <SocialLink
          name="linkedin"
          path="https://www.linkedin.com/in/lucy-conklin/"
        />
      </section>
    </div>
  );
}

const SocialLink = ({ path, name }: { path: string; name: string }) => {
  return (
    <a
      css={{
        ...Css.noUnderline.brightIndigo700.transitionSlow.bb.bw2.bHollow.b.mr4
          .$,
        "&:hover": Css.indigo900.bb.bw2.bBrightIndigo100.$,
      }}
      href={path}
      target="_blank"
      rel="noreferrer">
      {name}
    </a>
  );
};
