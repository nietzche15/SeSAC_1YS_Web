import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    const { name, age, nickName } = this.props;
    return (
      <div>
        <h1>이름 : {name}</h1>
        <h1>나이 : {age}</h1>
        <h1>별명 : {nickName}</h1>
      </div>
    );
  }
}
