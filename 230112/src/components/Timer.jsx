import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    setInterval(() => {
      console.log('💎타이머 실행 중');
    }, 1000);
  }, []);
  return (
    <>
      <h1>타이머가 실행 중입니다</h1>
    </>
  );
}
