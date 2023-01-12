import { useState } from 'react';
import Timer from './Timer';

export default function ShowTimer() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button>
    </>
  );
}
