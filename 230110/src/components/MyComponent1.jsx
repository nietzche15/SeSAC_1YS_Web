import React from 'react';
import PropTypes from 'prop-types';

export default function MyComponent1({ name, age, children }) {
  return (
    <div>
      저는 {name} ({age}세)입니다
      <br />
      children 값은 {children}입니다
    </div>
  );
}

MyComponent1.defaultProps = {
  name: '비밀',
};

MyComponent1.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
