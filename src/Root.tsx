import React from 'react';
import './svg.scss';
import {SvgFc} from "./Svg";

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
export const RootFc = () => (
  <div>
    <SvgFc />
    <h1>digitaLife</h1>
  </div>
);
