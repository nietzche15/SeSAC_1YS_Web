import React from 'react';

export default function InlineCss() {
  const divStyle = {
    backgroundColor: 'palevioletred',
  };
  const headingStyle = {
    color: 'blue',
  };
  const spanStyle = {
    backgroundColor: 'aliceblue',
    fontWeight: '700',
  };

  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>CSS 테스트 컴포넌트입니다</h1>
      <span style={spanStyle}>CSS TEST COMPONENT 1</span>
    </div>
  );
}
