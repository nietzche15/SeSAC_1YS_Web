import React, { useState } from 'react';

export default function EventEx() {
  const [userlist, setUserlist] = useState([
    {
      username: '코디',
      email: 'codi@gmail.com',
    },
    {
      username: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const [form, setForm] = useState({
    username: '',
    email: '',
  });
  const { username, email } = form;

  const inputChange = (e) => {
    const addedForm = { userlist, ...form, [e.target.name]: e.target.value };
    setForm(addedForm);
  };

  const enterInput = (e) => {
    if (e.key === 'Enter') showList();
  };

  const showList = () => {
    setUserlist([...userlist.concat(form)]);
    setForm({
      username: '',
      email: '',
    });
  };

  const deleteList = (e) => {
    userlist.splice(e.target.id, 1);
    setUserlist([...userlist]);
  };

  return (
    <>
      <input
        name="username"
        placeholder="이름"
        value={username}
        onChange={inputChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={inputChange}
        onKeyDown={enterInput}
      />
      <button onClick={showList}>등록</button>
      <br />
      {userlist.map((e, i) => (
        <h1 key={i} id={i} onDoubleClick={deleteList}>
          {e.username} : {e.email}
        </h1>
      ))}
    </>
  );
}
