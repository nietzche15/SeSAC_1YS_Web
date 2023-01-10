import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent2 extends Component {
  static defaultProps = {
    name: '비밀',
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  };

  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        저는 {name} ({age}세)입니다
        <br />
        children 값은 {children}입니다
      </div>
    );
  }
}

// MyComponent2.defaultProps = {
//   name: '비밀',
// };

// MyComponent2.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };
