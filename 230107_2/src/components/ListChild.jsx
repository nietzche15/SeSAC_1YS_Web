import React from 'react';

export default function ListChild(props) {
  return (
    <div>
      <h2>{props.h2Tag}</h2>
      <p>{props.pTag}</p>
      <hr />
    </div>
  );
}
