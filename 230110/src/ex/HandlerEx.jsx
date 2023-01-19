import React, { Component } from 'react';

export default class HandlerEx extends Component {
  state = { msg: 'Hello World!' };

  eventClick = () => {
    this.state.msg.includes('G')
      ? this.setState({ msg: 'Hello World!' })
      : this.setState({ msg: 'Goodbye World!' });
  };
  render() {
    const { msg } = this.state;
    return (
      <>
        <h1>{msg}</h1>
        <br />
        <br />
        <button onClick={this.eventClick}>Click</button>
      </>
    );
  }
}
