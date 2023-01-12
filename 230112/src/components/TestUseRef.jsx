import { useState, useRef } from 'react';

export default function TestUseRef() {
  const [text, setText] = useState('안녕하세요');

  const inputValue = useRef();

  const onChangeText2 = () => {
    console.log(inputValue);
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeText2} />
    </div>
  );
}
