import React, { useState } from 'react';

export default function Ex2() {
  const [num2, setNumber] = useState(0);

  return (
    <div>
      <br />
      <span
        style={{ fontSize: '50px' }}
        onClick={() => {
          setNumber(num2 + 1);
        }}
      >
        {num2 > 10 ? '😎' : '👍'}
      </span>
      <br />
      <span style={{ fontSize: '50px' }}>{num2}</span>
    </div>
  );
}
