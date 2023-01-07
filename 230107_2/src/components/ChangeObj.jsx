import React from 'react';

export default function ChangeObj(props) {
  if (props.objArr) {
    const { name, age, nickName } = props.objArr;

    return (
      <div>
        <h1>이름 : {name}</h1>
        <h2>나이 : {age}</h2>
        <h2>별명 : {nickName}</h2>
      </div>
    );
  } else return false;
}
