/** @jsxImportSource @emotion/react */
import React from 'react';
import { Css, px } from "./Css";
import { jsx, css } from '@emotion/react';
import _ from 'lodash';
import { resumeList, ResumeItem } from './resumeItems'

export function Resume() {
  const categories = _.groupBy(resumeList, 'section');
  
  const sections =  Object.entries(categories).map(([key, value]) => <Category sectionTitle={key} items={value} />)
  
  return (
    <div>
      <div>
      <a 
        css={{...Css.noUnderline.brightIndigo700.transitionSlow.bb.bw2.bHollow.b.mr4.$, "&:hover": Css.indigo900.bb.bw2.bBrightIndigo100.$ }} 
        href="mailto:lucy.conklin@gmail.com" 
        target="blank"
      >
        lucy.conklin@gmail.com 
      </a>
      </div>
      { sections }
    </div>
  )
}

function Category({sectionTitle, items}: {sectionTitle: string; items: ResumeItem[]}) {
  return (
    <div>
      <h3 css={Css.f18.indigo300.ttu.bb.bIndigo50.bw2.py1.$}>{sectionTitle}</h3>
      {items.map((item) => <ListItem item={item} key={item.title} />)}
    </div>
  )
}

function ListItem({ item }: { item: ResumeItem }) {
  return (
    <div css={Css.my5.$}>
      <section css={Css.df.fdr.aib.$}>
        <p css={Css.f20.midGray.b.my0.$}>{item.title}</p>
        <p css={Css.f16.lightGray.b.mx2.my0.$}>{item.years}</p>
      </section>
      {item.subtitle && <p css={Css.f16.b.midGray.my1.$}>{item.subtitle}</p>}
      {item.detail && <p css={Css.f16.black.my1.lh(1.5).$}>{item.detail}</p>}
      <div css={Css.df.fdr.$}>
      {item.skills && item.skills.map((skill) => <div css={Css.b.indigo300.f16.pr2.$}>{skill}</div>)}
      </div>
    </div>
  );
}