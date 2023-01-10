import React from 'react';

export default function Foods({ fruit }) {
  return (
    <div>
      <span style={{ color: 'red' }}>{fruit}</span>은 가장 맛있는 과일입니다.
    </div>
  );
}

Foods.defaultProps = {
  fruit: '수박',
};
