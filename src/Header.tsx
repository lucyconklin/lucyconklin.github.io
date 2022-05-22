/** @jsxImportSource @emotion/react */
import React from 'react';
import { Css, px } from "./Css";
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div css={Css.df.fdc.aifs.$}>
      <div css={Css.h2.colorChangeBg.w100.mb2.$}></div>
      <nav css={Css.df.aifs.fdr.$}>
        <Link to="#" css={Css.mx5.$}>
          <HeaderLogo />
        </Link>
        <div css={Css.h7.mt4.$}>
          <div css={Css.df.aifs.fdr.$}>{routeLinks}</div>
        </div>
      </nav>
    </div>
  )
}

function HeaderLogo() {
  return(
    <svg width="40px" height="40px" viewBox="0 0 74 100" version="1.1" xmlns="http://www.w3.org/2000/svg" css={Css.ml6.$}>
      <g stroke="none" strokeWidth="1" fill="#fff" fillRule="evenodd">
          <polygon css={Css.colorChangeFill.$} id="Path" fill="#3F51B5" points="0.626464844 100 5.37041321 97.5472341 8.39580931 93.8419954 17.1225085 89.9880519 29.8347291 86.334758 37.2985971 86.8790423 43.6943663 86.5855503 48.4178915 94.6235961 47.772821 95.5756823 44.6832265 95.8151141 44.0592915 96.1643117 43.1917036 97.1250162 42.3370979 98.3462281 43.6943663 97.5472341 44.0592915 97.739187 47.6524986 97.739187 48.9593424 98.6259309 51.9622572 97.5472341 55.8081413 98.0989615 60.4104733 97.739187 62.1151727 97.4030736 64.1014423 97.4030736 64.5494058 97.1250162 66.184524 96.9222513 68.0571206 98.0989615 66.8900724 96.5686662 64.8933537 95.6706402 62.8006146 95.1489202 60.4104733 95.5756823 55.9972533 95.9624869 52.9972674 94.6235961 50.9352421 94.140345 46.1015269 86.334758 56.4480665 83.1960544 64.1014423 77.4834588 69.6872517 68.8918052 72.763864 60.8254757 73.4473269 51.5450639 72.359834 46.2408969 68.7938579 36.7350776 63.6412883 28.0635873 62.8006146 25.8023826 67.4077754 20.3311775 69.7854886 20.3311775 70.5440739 20.8510172 69.8725641 19.1147447 68.0571206 17.164582 66.184524 13.6990884 63.8200304 11.907894 63.5198576 11.2022909 63.8200304 7.70130567 66.0215346 5.27384623 72.5845678 3.31420334 73.6264648 2.43286546 73.6264648 1.48869241 72.9101507 0.392759068 70.5440739 0 67.7985066 0.718687199 65.49457 2.25603378 64.1014423 4.57874181 63.5198576 6.09242726 63.197916 7.92491117 62.9734989 11.1115638 61.8161873 10.5472224 59.2202314 10.5472224 53.181234 13.4144497 50.9352421 15.6423566 48.5229362 19.022294 47.423886 22.2674726 47.2396027 24.8215426 45.2916463 35.2126955 43.9276493 38.5704604 41.2293402 42.2797733 28.5975456 54.3815004 23.9958468 60.0261683 19.8144057 66.6841122 17.1225085 74.1404233 14.8441404 79.5926682"></polygon>
      </g>
    </svg>
  )
}

type HeaderNavProps = {
  path: string;
  name: string;
}

function HeaderNavItem({ path, name }: HeaderNavProps) {
  return(
    <div css={Css.mx2.$}>
      <Link to={path} css={{...Css.indigo700.b.noUnderline.pb1.transitionSlow.bb.bw(px(4)).bHollow.$, "&:hover": Css.bb.bw(px(4)).bIndigo100.indigo900.$}}>
        {name}
      </Link>
    </div>
  )
}

const routes = [
  {
    path: '',
    name: 'Home'
  },
  {
    path:'resume',
    name:'Resume'
  }
]

const routeLinks = routes.map((route, i) => <HeaderNavItem key={i} {...route} />)
