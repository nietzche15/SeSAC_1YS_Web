import React from 'react';
import ListChild from './ListChild';

const dataArr = [
  {
    h2Tag: '리액트 공부하기',
    pTag: 'state 사용법 익히기',
  },
  {
    h2Tag: '코테 문제 풀기',
    pTag: 'Lv.0 정복',
  },
  {
    h2Tag: '변경 확인',
    pTag: '확인 완료',
  },
];

function List() {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el) => {
        return <ListChild h2Tag={el.h2Tag} pTag={el.pTag} />;
      })}
    </div>
  );
}

export default List;
