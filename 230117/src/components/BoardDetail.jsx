import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  // const params = useParams();
  // console.log(params);
  // 구조분해
  const { boardID } = useParams();

  return (
    <>
      <Header />
      {/* <h2>Thread of the Content {params.boardID}</h2> */}
      <h2>Thread of the Content {boardID}</h2>
    </>
  );
}
