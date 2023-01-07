import React from 'react';

// props = {
//     text : "Hello World!"
// }
// 로 보내서
// MainHeader({text})
//text key로 value 받은 것

// props = {
//     userID : ,
//     text : ,
//     href :,
// }

function MainHeader(props) {
  // 구조분해 확인 예시
  //   const obj = {
  //     str: 'text',
  //     num: 10,
  //   };

  //   const { str, num } = obj;

  //   console.log(str);
  //   console.log(num);

  return (
    <div>
      <h1>{props.userID}님 반갑습니다.</h1>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}

export default MainHeader;
