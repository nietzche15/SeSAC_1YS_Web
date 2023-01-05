import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: '정새싹',
  //     };
  //   }
  state = {
    teacher: '정새싹',
  };
  render() {
    const { teacher } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'SeSAC Jeong' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
