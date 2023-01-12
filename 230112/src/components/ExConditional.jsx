import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
  const [compNum, setCountNum] = useState(1);

  const checkComponent =
    compNum === 1 ? (
      <PracticeOne name="1번 Component" />
    ) : (
      <PracticeTwo name="2번 Component" />
    );
  return (
    <>
      {checkComponent}
      <button onClick={() => setCountNum(compNum === 1 ? 2 : 1)}>
        {compNum}번
      </button>
    </>
  );
}
