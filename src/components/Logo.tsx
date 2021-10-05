import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.header`
  padding: 30px;
  color: #fff;
  font-size: 64px;
  background: #32c5fa;
`;

function Logo() {
  return (
    <LogoStyle>
      <h1>TODO LIST</h1>
    </LogoStyle>
  );
}

export default Logo;
