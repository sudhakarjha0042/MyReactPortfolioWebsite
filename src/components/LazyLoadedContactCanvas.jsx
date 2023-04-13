import React from 'react';
// import {
//     Contact,
//   } from "./components";

import Contact from "./Contact";

const LazyLoadedContactCanvas = ({ shouldRender }) => {
  if (!shouldRender) return null;
  return <Contact />;
};

export default LazyLoadedContactCanvas;