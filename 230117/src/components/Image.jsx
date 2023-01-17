import React from 'react';
import srcImg from '../images/growing_heart.png';

export default function Image() {
  return (
    <>
      <img src={srcImg} alt="growing_heart" />
      <img src="/images/sparkling_heart.png" alt="sparkling_heart" />
    </>
  );
}
