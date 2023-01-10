import React, { useState } from 'react';

export default function ChangeNum2() {
  const [num1, setNum] = useState(0);
  const Increase = () => setNum(num1 + 1);
  const Decrease = () => setNum(num1 - 2);
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}
