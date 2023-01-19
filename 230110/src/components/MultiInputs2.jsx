import React, { useState } from 'react';

export default function MultiInputs2() {
  // const [username, setUsername] = useState('');
  // const [msg, setMsg] = useState('');
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMsg = (e) => setMsg(e.target.value);
  // const onClick = () => {
  //   alert(username + ': ' + msg);
  //   setUsername('');
  //   setMsg('');
  // };

  const [form, setForm] = useState({
    username: '',
    msg: '',
  });

  const { username, msg } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + msg);
    setForm({
      username: '',
      msg: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <div>
      <h1>리액트의 이벤트!!</h1>

      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      />

      <input
        type="text"
        name="msg"
        placeholder="이곳에 입력해보세요."
        value={msg}
        // onChange={onChangeMsg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>클릭</button>
    </div>
  );
}
