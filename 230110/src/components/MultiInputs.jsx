import React, { Component } from 'react';

export default class MultiInputs extends Component {
  state = {
    username: '',
    msg: '',
  };

  eventChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  eventClick = () => {
    alert(this.state.username + ': ' + this.state.msg);
    this.setState({
      username: '',
      msg: '',
    });
  };

  eventKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.eventClick();
    }
  };

  render() {
    return (
      <div>
        <h1>리액트의 이벤트!!</h1>

        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          value={this.state.username}
          onChange={this.eventChange}
        />
        <input
          type="text"
          name="msg"
          placeholder="이곳에 입력해보세요"
          value={this.state.msg}
          onChange={this.eventChange}
          onKeyPress={this.eventKeyPress}
        />

        <button onClick={this.eventClick}>Click</button>
      </div>
    );
  }
}
