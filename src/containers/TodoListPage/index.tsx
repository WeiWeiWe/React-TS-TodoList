import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #32c5fa;
`;

const TodoListContainer = styled.header`
  width: 100%;
  max-width: 576px;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  background: #fff;
`;

function TodoList() {
  return (
    <Wrapper>
      <TodoListContainer>TodoList</TodoListContainer>
    </Wrapper>
  );
}

export default TodoList;
