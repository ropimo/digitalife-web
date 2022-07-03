import React from 'react';
import './svg.scss';

const w = 100;
const h = 100;
const m = 5;
const s = 15;
const r = (h * 3) / 10;
const d = s;
const center = (w + m + s * 2) / 2;
const top = m + s;
const lh = h * 0.4;
const lw = s;
export const SvgFc = () => (
  <svg width="600" height="600" viewBox={`0 0 ${w + top * 2} ${h + top * 2}`}>
    {/*<rect width="100%" height="100%" fill="red" />*/}

    {/*<circle cx="150" cy="100" r="80" fill="green" />*/}

    {/*<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">*/}
    {/*  SVG*/}
    {/*</text>*/}
    <path
      id="L"
      d={`
        M${center},${top} 
        v${h} 
        h${w / 2} 
      `}
    />
    <path
      id="d"
      d={`
        M${center},${top} 
        v${h} 
        h-${d}
        a${r} ${r} 0 0 1 0 -${r * 2}
        h${d}
      `}
    />
    <g id="branch">
      {/*<g id="leaf1" transform={`translate(${center + s} ${top + h - s})`}>*/}
      <g id="leaf1" className={'leaf1'}>
        <path
          id="leaf1B"
          d={`
          M0,0
          c-${lw} -${lh * 0.9}, 0 -${lh} ,0 -${lh} 
          c${lw * 0.2} ${lh * 0.2}, ${lw * 0.2} ${lh * 0.4},0 ${lh} 
        `}
          fill="darkgreen"
        />
        <path
          id="leaf1A"
          d={`
          M0,0
          c-${lw} -${lh * 0.9}, 0 -${lh} ,0 -${lh} 
          c-${lw * 0.15} ${lh * 0.2},-${lw * 0.1} ${lh * 0.4},0 ${lh} 
        `}
        />
      </g>
    </g>

    {/*<path*/}
    {/*  id="leaf2B"*/}
    {/*  d={`*/}
    {/*    M${center + s + 30},${top + h - s}*/}
    {/*    c-${lw} -${lh * 0.9}, 0 -${lh} ,0 -${lh} */}
    {/*    c--${lw} ${lh * 0.9}, 0  ${lh} ,0 ${lh} */}
    {/*  `}*/}
    {/*  fill="darkgreen"*/}
    {/*/>*/}
    {/*<path*/}
    {/*  id="leaf2A"*/}
    {/*  d={`*/}
    {/*    M${center + s + 30},${top + h - s}*/}
    {/*    c-${lw} -${lh * 0.9}, 0 -${lh} ,0 -${lh} */}
    {/*    z*/}
    {/*  `}*/}
    {/*  fill="olive"*/}
    {/*/>*/}
  </svg>
);
