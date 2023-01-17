import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Board() {
  return (
    <>
      <Header />
      <h1>This is Component Board</h1>
      <Link to="1">
        <h2>Content 1</h2>
      </Link>
      <Link to="2">
        <h2>Content 2</h2>
      </Link>
    </>
  );
}
