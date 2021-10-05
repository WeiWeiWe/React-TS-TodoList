import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Header from '../../components/Search';
import Tab from '../../components/Tabs';
import List from '../../components/List';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgb(50, 197, 250);
`;

const TodoListContainer = styled.div`
  width: 100%;
  max-width: 576px;
  text-align: center;
  background: rgb(50, 197, 250);
`;

const TodoListHeader = styled.header`
  margin-bottom: 50px;
  background: #fff;
`;

const TodoListContent = styled.article`
  background: #fff;
`;

function TodoList() {
  return (
    <Wrapper>
      <TodoListContainer>
        <TodoListHeader>
          <Logo />
          <Header />
        </TodoListHeader>
        <TodoListContent>
          <Tab />
          <List />
        </TodoListContent>
      </TodoListContainer>
    </Wrapper>
  );
}

export default TodoList;
