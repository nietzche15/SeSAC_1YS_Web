import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (e) => e.done === true
  );
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {list.map((e) => {
          return (
            <li key={e.id}>
              {e.text}
              <button>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
