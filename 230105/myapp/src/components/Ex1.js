import React from 'react';
import { useState } from 'react';

function Ex1() {
  const [num1, setNumber] = useState(0);

  return (
    <div>
      문제 풀기
      <br />
      <span>{num1}</span>
      <br />
      <button
        onClick={() => {
          setNumber(num1 - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setNumber(num1 + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Ex1;
