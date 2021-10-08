import styled from 'styled-components';

export const LogoStyle = styled.header`
  padding: 30px;
  color: #fff;
  background: #32c5fa;

  h1 {
    font-size: 64px;
  }

  @media screen and (max-width: 576px) {
    h1 {
      font-size: 42px;
    }
  }
`;
