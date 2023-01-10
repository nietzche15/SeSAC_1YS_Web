import React, { useState } from 'react';

export default function Say() {
  const [msg, setMsg] = useState('');
  const onClickEnter = () => setMsg('안녕하세요!');
  const onClickLeave = () => setMsg('안녕히가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <h1 style={{ color }}>{msg}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <button style={{ color: 'orange' }} onClick={() => setColor('orange')}>
        주황색
      </button>
    </div>
  );
}
