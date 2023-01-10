import React, { Component } from 'react';

export default class BestSeller extends Component {
  render() {
    const { cover, title, author, price, category } = this.props;
    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'aliceblue',
          padding: '10px 0 10px 0',
        }}
      >
        <h1 style={{ color: 'slateblue' }}>이번주 베스트셀러</h1>
        <img style={{ width: '300px' }} src={cover} />
        <h1>{title}</h1>
        <h2>저자 : {author}</h2>
        <h2>판매가 : {price}</h2>
        <h2>구분 : {category}</h2>
      </div>
    );
  }
}
