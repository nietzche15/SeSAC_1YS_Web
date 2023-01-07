import React from 'react';
import ListChild from './ListChild';
import Modal from './modal';

function List() {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      <ListChild h2Tag="리액트 공부하기" pTag="state 사용법 익히기" />
      <ListChild h2Tag="코테 문제 풀기" pTag="Lv.0 정복" />
    </div>
  );
}

export default List;
