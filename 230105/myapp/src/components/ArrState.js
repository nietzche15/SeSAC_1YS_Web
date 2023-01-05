import React, { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      {state}
      <br />
      <button
        onClick={() => {
          state[0] += 1;
          const copyArr = [...state];
          setState(copyArr);
        }}
      >
        +1
      </button>
    </div>
  );
}
