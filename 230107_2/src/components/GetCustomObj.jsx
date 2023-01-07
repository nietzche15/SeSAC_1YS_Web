import React from 'react';
import CustomObj from './CustomObj';

export default function GetCustomObj() {
  const exObj = {
    name: '정새싹',
    age: '2023',
    nickName: '사고뭉치',
  };
  return (
    <div>
      <CustomObj obj={exObj} />
    </div>
  );
}
