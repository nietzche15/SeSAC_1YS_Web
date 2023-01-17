import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: paleturquoise;
`;

const MyHeading = styled.h1`
  color: slateblue;
`;
const MySpan = styled.span`
  background-color: deeppink;
  color: white;
  font-weight: 800;
`;

export default function TestStyled() {
  return (
    <MyDiv>
      <MyHeading>This is a new h1 tag</MyHeading>
      <MySpan>This is a new span tag</MySpan>
    </MyDiv>
  );
}
