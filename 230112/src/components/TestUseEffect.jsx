import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('👍 Btn Clicked');
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log('🎀 Input Changed');
    setText(inputValue.current.value ? inputValue.current.value : '입력하세요');
  };

  useEffect(() => console.log('🔍 렌더링 할 때 마다 실행'));
  useEffect(() => console.log('🚞 마운트 될 때만 실행'), []);
  useEffect(() => console.log('⚛️ 버튼 클릭 될 때만 실행'), [count]);
  useEffect(() => console.log('🍩 키 입력시에만 실행'), [count, text]);
  useEffect(() => console.log('🧁🧃 값 변화 될 때만 실행'), [count, text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </>
  );
}
