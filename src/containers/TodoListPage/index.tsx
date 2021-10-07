import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/hooks';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import Tab from '../../components/Tabs';
import List from '../../components/List';
import { actionCreators } from './store';
import { ItemTypes, InputArrayRefType, EnumItemProcessTypes } from '../../types/index';

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
  const tabStatus = useSelector((state) => state.todo.tabStatus);
  const dispatch = useDispatch();

  const inputArrayRef = useRef<InputArrayRefType[]>([]);

  const changeInputValue = (value: string) => {
    dispatch(actionCreators.changeInputValueActionCreator(value));
  };

  const addTodoList = () => {
    if (inputValue) {
      const item = {
        id: new Date().getTime().toString(),
        title: inputValue,
        process: EnumItemProcessTypes.ACTIVE,
      };
      dispatch(actionCreators.addTodoListActionCreator(item));
    }
  };

  const deleteTodoList = (index: number, id: string) => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current = inputArrayRef.current.filter((item) => item.id !== id);
    }
    dispatch(actionCreators.deleteTodoListActionCreator(index));
  };

  const switchModifyStatus = (id: string) => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current.forEach((item) => {
        if (item.id === id) {
          item.element.disabled = false;
          item.element.focus();
        }
      });
    }
  };

  const InputBlur = () => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current.forEach((item) => {
        item.element.disabled = true;
      });
    }
  };

  const changeTitleInputValue = (value: string, id: string) => {
    dispatch(actionCreators.ChangeListItemTitleValueActionCreator(value, id));
  };

  const changeProcessStatus = (item: ItemTypes) => {
    const { ACTIVE, DONE } = EnumItemProcessTypes;
    const switchProcess = item.process === ACTIVE ? DONE : ACTIVE;
    dispatch(actionCreators.ChangeProcessStatusActionCreator(switchProcess, item.id));
  };

  const changeTabStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const switchTabStatus = value as EnumItemProcessTypes;
    dispatch(actionCreators.ChangeTabStatusActionCreator(switchTabStatus));
  };

  return (
    <Wrapper>
      <TodoListContainer>
        <TodoListHeader>
          <Logo />
          <Search inputValue={inputValue} changeInputValue={changeInputValue} addTodoList={addTodoList} />
        </TodoListHeader>
        <TodoListContent>
          <Tab changeTabStatus={changeTabStatus} list={list} tabStatus={tabStatus} />
          <List
            list={list}
            deleteTodoList={deleteTodoList}
            switchModifyStatus={switchModifyStatus}
            changeTitleInputValue={changeTitleInputValue}
            inputArrayRef={inputArrayRef}
            InputBlur={InputBlur}
            changeProcessStatus={changeProcessStatus}
            tabStatus={tabStatus}
          />
        </TodoListContent>
      </TodoListContainer>
    </Wrapper>
  );
}

export default TodoList;
