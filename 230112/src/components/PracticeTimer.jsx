import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <>
      <h1>{time.current}</h1>
      <button
        onClick={() => {
          setRender(!render);
        }}
      >
        시간
      </button>
    </>
  );
}
