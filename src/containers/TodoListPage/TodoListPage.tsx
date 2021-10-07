import React, { useRef } from 'react';
import { useSelector } from '../../store/hooks';
import { useDispatch } from 'react-redux';
import { Wrapper, TodoListContainer, TodoListHeader, TodoListContent } from './TodoListPageStyle';
import { Logo, Search, Tabs, List } from '../../components';
import { actionCreators } from './store';
import { ItemTypes, InputArrayRefType, EnumItemProcessTypes } from '../../types';

export function TodoListPage() {
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

  const keyUpTodoList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue && e.key === 'Enter') {
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

  const keyUpTitleInputValueDone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputArrayRef.current?.length > 0) {
        inputArrayRef.current.forEach((item) => {
          item.element.disabled = true;
        });
      }
    }
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
          <Search
            inputValue={inputValue}
            changeInputValue={changeInputValue}
            addTodoList={addTodoList}
            keyUpTodoList={keyUpTodoList}
          />
        </TodoListHeader>
        <TodoListContent>
          <Tabs changeTabStatus={changeTabStatus} list={list} tabStatus={tabStatus} />
          <List
            list={list}
            deleteTodoList={deleteTodoList}
            switchModifyStatus={switchModifyStatus}
            changeTitleInputValue={changeTitleInputValue}
            inputArrayRef={inputArrayRef}
            keyUpTitleInputValueDone={keyUpTitleInputValueDone}
            InputBlur={InputBlur}
            changeProcessStatus={changeProcessStatus}
            tabStatus={tabStatus}
          />
        </TodoListContent>
      </TodoListContainer>
    </Wrapper>
  );
}
