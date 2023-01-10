import React, { Component } from 'react';

export default class ChangeNum extends Component {
  state = { number: 0 };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h2>{number}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
