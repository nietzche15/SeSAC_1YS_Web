import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextValid extends Component {
  static defaultProps = {
    text: '이건 기본 text props 입니다.',
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <button onClick={() => console.log(valid)}>콘솔 메세지</button>
      </div>
    );
  }
}
