import React, { useState } from 'react';
import ChangeObj from './ChangeObj';

export default function CallChangeObj() {
  const [idx, setIdx] = useState(0);

  const objArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  console.log(objArr[idx]);

  return (
    <div>
      <ChangeObj objArr={objArr[idx]} />
      <button
        onClick={() => {
          setIdx(idx < 2 ? idx + 1 : idx - 2);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
