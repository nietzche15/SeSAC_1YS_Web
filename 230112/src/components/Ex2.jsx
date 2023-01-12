import { useState, useRef } from 'react';

export default function Ex2() {
  let num1 = ~~(Math.random() * 9.99);
  let num2 = ~~(Math.random() * 9.99);
  let calc = ['+', '-', '*'][~~(Math.random() * 2.99)];

  const resultValue = useRef();
  const [again, setAgain] = useState(false);

  const checkAnswer = () => {
    let answer =
      calc === '+'
        ? num1 + num2
        : calc === '-'
        ? num1 - num2
        : calc === '*'
        ? num1 * num2
        : false;

    // answer === resultValue.current.value
    //   ? (alert('정답입니다!'), setAgain(!again))
    //   : alert('틀렸습니다. 다시 입력해주세요');

    if (resultValue.current.value == answer) {
      alert('정답입니다!');
      setAgain(!again);
    } else {
      alert('틀렸습니다. 다시 입력해주세요');
    }
    resultValue.current.value = '';
    resultValue.current.focus();
  };

  return (
    <div>
      <h1>{num1 + calc + num2}</h1>
      <input ref={resultValue} style={{ marginRight: '10px' }} />
      <button onClick={() => checkAnswer()}>정답 제출</button>
    </div>
  );
}
