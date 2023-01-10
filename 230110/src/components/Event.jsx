import React, { Component } from 'react';

export default class Event extends Component {
  state = { msg: '' };
  render() {
    return (
      <div>
        <h1>리액트의 이벤트</h1>

        <input
          type="text"
          name="message"
          placeholder="여기에 입력해보세요"
          value={this.state.msg}
          onChange={(e) => {
            this.setState({ msg: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.msg);
            this.setState({ msg: '' });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
