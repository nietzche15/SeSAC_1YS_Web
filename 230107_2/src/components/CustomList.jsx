import React from 'react';

export default function CustomList(props) {
  return (
    <ul>
      {props.arr?.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}
