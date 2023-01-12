import { useState, useRef } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  const onChangeText = (e) => {
    const inputText = e.target.value;
    console.log(inputText);
    setText(inputText);
  };

  const inputValue = useRef();

  const onChangeText2 = () => {
    console.log(inputValue);
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      useState :{' '}
      <input
        onChange={(e) => {
          onChangeText(e);
        }}
      />
      <br />
      useRef : <input ref={inputValue} onChange={onChangeText2} />
    </div>
  );
}
