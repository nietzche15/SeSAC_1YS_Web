import React, { Component } from 'react';
import growing_heart from '../growing_heart.png';

export default class Test2 extends Component {
  render() {
    const style = {
      color: 'orange',
      fontSize: '40px',
      marginTop: '20px',
    };
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={growing_heart} />
      </div>
    );
  }
}
