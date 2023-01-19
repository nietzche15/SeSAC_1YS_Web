import React, { Component } from 'react';

export default class Event3 extends Component {
  state = { msg: '' };

  eventChange = (e) => {
    this.setState({ msg: e.target.value });
  };
  eventClick = () => {
    alert(this.state.msg);
    this.setState({ msg: '' });
  };

  render() {
    return (
      <div>
        <h1>리액트의 이벤트</h1>

        <input
          type="text"
          name="message"
          placeholder="여기에 입력해보세요"
          value={this.state.msg}
          onChange={this.eventChange}
        />
        <button onClick={this.eventClick}>Click</button>
      </div>
    );
  }
}
