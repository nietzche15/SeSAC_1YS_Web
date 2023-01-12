import React, { useEffect, useRef, useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [show, setShow] = useState(false);
  const hideBtn = useRef();

  useEffect(() => hideBtn.current.focus());

  return (
    <div>
      {show && <PracticeTimer />}
      <br />
      <button ref={hideBtn} onClick={() => setShow(!show)}>
        {show ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}
