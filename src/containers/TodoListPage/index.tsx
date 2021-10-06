import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/hooks';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import Tab from '../../components/Tabs';
import List from '../../components/List';
import { actionCreators } from './store';

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
  const inputValue = useSelector((state) => state.todo.inputValue);
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const changeInputValue = (value: string) => {
    dispatch(actionCreators.changeInputValueActionCreator(value));
  };

  const addTodoList = () => {
    if (inputValue) {
      const item = {
        id: new Date().getTime().toString(),
        title: inputValue,
      };
      dispatch(actionCreators.addTodoListActionCreator(item));
    }
  };

  return (
    <Wrapper>
      <TodoListContainer>
        <TodoListHeader>
          <Logo />
          <Search inputValue={inputValue} changeInputValue={changeInputValue} addTodoList={addTodoList} />
        </TodoListHeader>
        <TodoListContent>
          <Tab />
          <List list={list} />
        </TodoListContent>
      </TodoListContainer>
    </Wrapper>
  );
}

export default TodoList;
