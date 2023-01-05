import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '정새싹' });
  console.log('state 1 :', state);

  return (
    <div>
      <br />
      <button
        onClick={() => {
          state.teacher === '정새싹'
            ? setState({ teacher: 'SeSAC Jeong' })
            : setState({ teacher: '정새싹' });
          //   setState(
          //     state.teacher === '정새싹'
          //       ? { teacher: 'SeSAC Jeong' }
          //       : { teacher: '정새싹' }
          //   );
          console.log('state 2 :', state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
