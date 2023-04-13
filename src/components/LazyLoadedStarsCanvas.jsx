import React from 'react';
import { StarsCanvas } from './canvas';

const LazyStarsCanvas = ({ shouldRender }) => {
  if (!shouldRender) return null;
  return <StarsCanvas />;
};

export default LazyStarsCanvas;
