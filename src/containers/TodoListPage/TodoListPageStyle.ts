import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgb(50, 197, 250);
`;

export const TodoListContainer = styled.div`
  width: 100%;
  max-width: 576px;
  text-align: center;
  background: rgb(50, 197, 250);

  @media screen and (max-width: 576px) {
    height: 100%;
  }
`;

export const TodoListHeader = styled.header`
  margin-bottom: 50px;
  background: #fff;
`;

export const TodoListContent = styled.article`
  background: #fff;
`;
