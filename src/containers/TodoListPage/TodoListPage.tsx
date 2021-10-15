import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/hooks';
import { Wrapper, TodoListContainer, TodoListHeader, TodoListContent } from './TodoListPageStyle';
import { Logo, Form, Tabs, List } from '../../components';
import { actionCreators } from './store';
import { ItemTypes, InputArrayRefType, EnumItemProcessTypes } from '../../types';

export function TodoListPage() {
  const inputValue = useSelector((state) => state.todo.inputValue);
  const list = useSelector((state) => state.todo.list);
  const tabStatus = useSelector((state) => state.todo.tabStatus);
  const dispatch = useDispatch();

  const inputArrayRef = useRef<InputArrayRefType[]>([]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actionCreators.changeInputValueActionCreator(e.target.value));
  };

  const addTodoList = () => {
    if (inputValue) {
      const item = {
        id: Date.now().toString(),
        title: inputValue,
        process: EnumItemProcessTypes.ACTIVE,
        isModify: false,
      };
      dispatch(actionCreators.addTodoListActionCreator(item));
    }
  };

  const keyUpTodoList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue && e.key === 'Enter') {
      const item = {
        id: Date.now().toString(),
        title: inputValue,
        process: EnumItemProcessTypes.ACTIVE,
        isModify: false,
      };
      dispatch(actionCreators.addTodoListActionCreator(item));
    }
  };

  const deleteTodoList = (item: ItemTypes) => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current = inputArrayRef.current.filter((refItem) => refItem.id !== item.id);
    }
    dispatch(actionCreators.deleteTodoListActionCreator(item.id));
  };

  const switchModifyStatus = (item: ItemTypes) => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current.forEach((refItem) => {
        if (refItem.id === item.id) {
          refItem.element.disabled = false;
          refItem.element.focus();
          dispatch(actionCreators.switchModifyStatusActionCreator(true, item.id));
        }
      });
    }
  };

  const InputBlur = (item: ItemTypes) => {
    if (inputArrayRef.current?.length > 0) {
      inputArrayRef.current.forEach((refItem) => {
        refItem.element.disabled = true;
        dispatch(actionCreators.switchModifyStatusActionCreator(false, item.id));
      });
    }
  };

  const changeTitleInputValue = (e: React.ChangeEvent<HTMLInputElement>, item: ItemTypes) => {
    dispatch(actionCreators.ChangeListItemTitleValueActionCreator(e.target.value, item.id));
  };

  const keyUpTitleInputValueDone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputArrayRef.current?.length > 0) {
      inputArrayRef.current.forEach((refItem) => {
        refItem.element.disabled = true;
      });
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
          <Form
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
