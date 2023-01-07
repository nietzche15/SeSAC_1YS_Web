import React from 'react';
import ListChild from './ListChild';

export default function Ex1() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨 윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      {items.map((el, idx) => (
        <ListChild
          h2Tag={`품목명 : ${el.item}`}
          pTag={`가격 : ${el.price}`}
          key={idx}
        />
      ))}
    </div>
  );
}
