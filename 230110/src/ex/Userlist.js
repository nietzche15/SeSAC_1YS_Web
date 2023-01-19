import React from 'react';

export default function Userlist(props) {
  props.userlist.map((e, i) => {
    let { username, email } = props.userlist[i];
    console.log('props :', props.userlist[i]);
    return (
      <h1>
        {username} : {email}
      </h1>
    );
  });
}
