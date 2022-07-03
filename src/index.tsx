import React from 'react';
import ReactDOM from 'react-dom';
import {SvgFc} from './svg';
import {RootFc} from "./Root";

const root = ReactDOM.createRoot(document.getElementById("reactAppRootContainer"));
root.render(<RootFc />);

// if (module.hot) {
//   module.hot.accept(); //  Hot Module Replacement (HMR) for ParcelJs 2
// }
