import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000');

    if (resFetch.status !== 200) return alert('Error');

    const data = await resFetch.data;
    setDataArr(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((e, i) => {
        return (
          <ProfileComponent
            key={i}
            name={e.name}
            age={e.age}
            nickName={e.nickName}
          />
        );
      })}
    </>
  );
}